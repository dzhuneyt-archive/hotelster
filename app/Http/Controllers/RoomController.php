<?php

namespace App\Http\Controllers;

use App\Room;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;



class RoomController extends Controller
{
    use ValidatesRequests;

    public function index()
    {
        return Room::all();
    }

    public function show($id)
    {
        $model = Room::with([
            'roomType',
            'roomCapacity',
            'hotel'
        ])
                     ->find($id);
        return $model;
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'hotel_id' => 'required',
            'room_type_id' => 'required',
            'room_capacity_id' => 'required',
        ]);
        if ($validator->fails()) {
            return $validator->errors();
        }

        return Room::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $model = Room::findOrFail($id);
        $model->update($request->all());

        return $model;
    }

    public function delete(Request $request, $id)
    {
        $model = Room::findOrFail($id);
        $model->delete();

        return 204;
    }
}
