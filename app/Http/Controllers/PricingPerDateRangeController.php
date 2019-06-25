<?php

namespace App\Http\Controllers;

use App\PricingPerDateRange;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Throwable;



class PricingPerDateRangeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param $room_type_id
     * @param $room_capacity_id
     * @return Response
     */
    public function index($room_type_id, $room_capacity_id)
    {
        $query = PricingPerDateRange::where(
            [
                'room_type_id' => $room_type_id,
                'room_capacity_id' => $room_capacity_id,
            ]
        );

        // In case start dates are equal, order by end dates
        $query->orderBy('range_start', 'ASC');
        $query->orderBy('range_end', 'ASC');
        return $query->get();
    }

    /**
     * Display the specified resource.
     *
     * @param PricingPerDateRange $pricingPerDateRange
     * @return Response
     */
    public function show($room_type_id, $room_capacity_id, $range_start, $range_end)
    {
        $model = PricingPerDateRange::where([
            'room_type_id' => $room_type_id,
            'room_capacity_id' => $room_capacity_id,
            'range_start' => $range_start,
            'range_end' => $range_end,
        ])
                                    ->first();

        return $model;
    }

    /**
     * Create or update the custom price for the given date range,
     * for the given room type and room capacity combination
     *
     * @param Request $request
     * @param $room_type_id
     * @param $room_capacity_id
     * @param $range_start
     * @param $range_end
     * @return PricingPerDateRange|ResponseFactory|Response
     * @throws Throwable
     */
    public function store(Request $request, $room_type_id, $room_capacity_id, $range_start, $range_end)
    {
        $validator = Validator::make($request->all(), [
            'daily_price' => 'required',
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), 400);
        }
        $model = PricingPerDateRange::where([
            'room_type_id' => $room_type_id,
            'room_capacity_id' => $room_capacity_id,
            'range_start' => $range_start,
            'range_end' => $range_end,
        ])
                                    ->first();

        if (!$model) {
            $model = new PricingPerDateRange();
            $model->room_type_id = $room_type_id;
            $model->room_capacity_id = $room_capacity_id;
            $model->range_start = $range_start;
            $model->range_end = $range_end;
        }

        $model->daily_price = $request->get('daily_price');
        $model->saveOrFail();

        return $model;
    }

}
