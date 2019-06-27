<?php

namespace App\Http\Controllers;

use App\PricingPerRoomType;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;



class PricingPerRoomTypeController extends Controller
{
    use ValidatesRequests;

    public function index()
    {
        return PricingPerRoomType::all();
    }

    public function show($weekday, $room_type_id, $room_capacity_id)
    {
        return PricingPerRoomType::where('weekday_index', $weekday)
                                 ->where('room_type_id', $room_type_id)
                                 ->where('room_capacity_id', $room_capacity_id)
                                 ->first();
    }

    public function store(Request $request, $weekday, $room_type_id, $room_capacity_id)
    {
        $validator = Validator::make($request->all(), [
            'daily_price' => 'required',
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), 400);
        }

        $model = PricingPerRoomType::where('weekday_index', $weekday)
                                   ->where('room_type_id', $room_type_id)
                                   ->where('room_capacity_id', $room_capacity_id)
                                   ->first();

        if (!$model) {
            $model = new PricingPerRoomType();
            $model->weekday_index = $weekday;
            $model->room_type_id = $room_type_id;
            $model->room_capacity_id = $room_capacity_id;
        }

        $model->daily_price = $request->get('daily_price');
        $model->saveOrFail();

        return $model;
    }

    public function delete($weekday, $room_type_id, $room_capacity_id)
    {
        $model = PricingPerRoomType::where('weekday_index', $weekday)
                                   ->where('room_type_id', $room_type_id)
                                   ->where('room_capacity_id', $room_capacity_id)
                                   ->first();

        if (!$model) {
            abort(404);
        }
        $model->delete();

        return 204;
    }
}
