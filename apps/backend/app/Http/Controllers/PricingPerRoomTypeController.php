<?php

namespace App\Http\Controllers;

use App\PricingPerRoomType;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Throwable;



class PricingPerRoomTypeController extends Controller
{
    use ValidatesRequests;

    public function index()
    {
        return PricingPerRoomType::all();
    }

    public function show($room_type_id)
    {
        return PricingPerRoomType::where('room_type_id', $room_type_id)
                                 ->first();
    }

    /**
     * @param Request $request
     * @param $room_type_id
     * @return PricingPerRoomType|ResponseFactory|Response
     * @throws Throwable
     */
    public function store(Request $request, $room_type_id)
    {
        $validator = Validator::make($request->all(), [
            'daily_price' => 'required',
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), 400);
        }

        $model = PricingPerRoomType::where('room_type_id', $room_type_id)
                                   ->first();

        if (!$model) {
            $model = new PricingPerRoomType();
            $model->room_type_id = $room_type_id;
        }

        $model->daily_price = $request->get('daily_price');
        $model->saveOrFail();

        return $model;
    }

    public function delete($room_type_id)
    {
        $model = PricingPerRoomType::where('room_type_id', $room_type_id)
                                   ->first();

        if (!$model) {
            abort(404);
        }
        $model->delete();

        return 204;
    }
}
