<?php

namespace App\Http\Controllers;

use App\RoomType;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;



class RoomTypeController extends Controller
{
    use ValidatesRequests;

    public function index()
    {
        return RoomType::all();
    }

    public function show($id)
    {
        return RoomType::find($id);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            return $validator->errors();
        }
        return RoomType::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $model = RoomType::findOrFail($id);
        $model->update($request->all());

        return $model;
    }

    public function delete(Request $request, $id)
    {
        $model = RoomType::findOrFail($id);
        $model->delete();

        return 204;
    }
}
