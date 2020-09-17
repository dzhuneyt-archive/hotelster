<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoomTypeResource;
use App\PricingPerRoomType;
use App\RoomType;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;



class RoomTypeController extends Controller
{
    use ValidatesRequests;

    public function index()
    {
        return RoomTypeResource::collection(RoomType::all());
    }

    public function show($id)
    {
        return new RoomTypeResource(RoomType::find($id));
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'daily_price' => 'required|numeric'
        ]);
        if ($validator->fails()) {
            return response($validator->errors(), 400);
        }
        $model = null;
        DB::transaction(function () use ($request, &$model) {
            $model = RoomType::create([
                'name' => $request->get('name'),
            ]);
            $pricingModel = new PricingPerRoomType();
            $pricingModel->room_type_id = $model->id;
            $pricingModel->daily_price = $request->get('daily_price');
            $pricingModel->save();
        });

        return $model;
    }

    /**
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function update(Request $request, $id)
    {
        $model = RoomType::findOrFail($id);

        DB::transaction(function () use (&$model, $request) {
            $model->update($request->all([
                'name'
            ]));

            if ($request->get('daily_price')) {
                $pricingModel = PricingPerRoomType::where('room_type_id', $model->id)
                                                  ->first();
                $pricingModel->daily_price = $request->get('daily_price');
                $pricingModel->save();
            }
        });


        return $model;
    }

    public function destroy(Request $request, $id)
    {
        $model = RoomType::findOrFail($id);
        $model->delete();

        return 204;
    }
}
