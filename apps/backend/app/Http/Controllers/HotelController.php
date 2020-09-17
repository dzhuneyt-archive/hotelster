<?php

namespace App\Http\Controllers;

use App\Hotel;
use Illuminate\Http\Request;



class HotelController extends Controller
{

    /**
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $hotel = Hotel::findOrFail($id);
        return response(new \App\Http\Resources\Hotel($hotel));
    }

    /**
     * Update a single hotel
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $hotel = Hotel::findOrFail($id);
        $hotel->update($request->all());

        return response(new \App\Http\Resources\Hotel($hotel));
    }

}
