<?php

use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function () {
    // @TODO apply auth middleware
    Route::apiResource('hotels', 'HotelController');
    Route::apiResource('room_types', 'RoomTypeController');
    Route::apiResource('rooms', 'RoomController');
    Route::apiResource('bookings', 'BookingController');
});

Route::post('bookings/anonymous', 'BookingController@store');
