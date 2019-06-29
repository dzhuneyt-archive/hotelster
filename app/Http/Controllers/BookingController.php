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

    public function index()
    {
        return BookingResource::collection(Booking::with(['room'])
                                                  ->orderBy('start')
                                                  ->get());
    }

    public function show($id)
    {
        $model = Booking::with([

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

    public function delete(Request $request, $id)
    {
        $model = Booking::findOrFail($id);
        $model->delete();

        return 204;
    }
}
