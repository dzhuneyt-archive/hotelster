<?php

namespace App\Http\Controllers;

use App\Booking;
use App\Http\Resources\BookingResource;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;



class BookingController extends Controller
{
    use ValidatesRequests;

    public function index(Request $request)
    {
        $fromDate = $request->get('from_date');
        $toDate = $request->get('to_date');

        $query = Booking::with(['room']);
        if ($fromDate) {
            $query->whereDate('start', '>', $fromDate);
        }
        if ($toDate) {
            $query->whereDate('start', '<', $toDate);
        }
        return BookingResource::collection($query
            ->orderBy('start')
            ->get());
    }

    public function show($id)
    {
        $model = Booking::with([
            'room'
        ])
                        ->find($id);
        return new BookingResource($model);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'room_id' => 'integer|required',
            'start' => 'date|required',
            'end' => 'date|required',
            'customer_fullname' => 'string|required',
            'customer_email' => 'email|required',
        ]);
        if ($validator->fails()) {
            return $validator->errors();
        }

        return new BookingResource(Booking::create($request->all()));
    }

    public function update(Request $request, $id)
    {

        $model = Booking::findOrFail($id);
        $model->update($request->all());

        return new BookingResource($model);
    }

    public function destroy(Request $request, $id)
    {
        $model = Booking::findOrFail($id);
        $model->delete();

        return 204;
    }
}
