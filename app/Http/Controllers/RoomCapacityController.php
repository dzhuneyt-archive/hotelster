<?php

namespace App\Http\Controllers;

use App\RoomCapacity;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;



class RoomCapacityController extends Controller
{
    use ValidatesRequests;

    public function index()
    {
        return RoomCapacity::all();
    }

    public function show($id)
    {
        return RoomCapacity::find($id);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            return $validator->errors();
        }
        return RoomCapacity::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $model = RoomCapacity::findOrFail($id);
        $model->update($request->all());

        return $model;
    }

    public function delete(Request $request, $id)
    {
        $model = RoomCapacity::findOrFail($id);
        $model->delete();

        return 204;
    }
}
