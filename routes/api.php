<?php

use Illuminate\Http\Request;
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

Route::middleware('auth:api')
     ->get('/user', function (Request $request) {
         return $request->user();
     });


// @TODO apply auth middleware
Route::apiResource('hotels', 'HotelController');
Route::apiResource('room_types', 'RoomTypeController');
Route::apiResource('rooms', 'RoomController');
Route::apiResource('bookings', 'BookingController');
// @TODO Add API method to allow non-registered users to add a reservation (it's related to Wordpress task)

Route::prefix('price')
     ->group(function () {
         Route::get(
             '{room_type_id}',
             'PricingPerRoomTypeController@show'
         );
         Route::put(
             '{room_type_id}',
             'PricingPerRoomTypeController@store'
         );
         Route::post(
             '{room_type_id}',
             'PricingPerRoomTypeController@store'
         );
         Route::delete(
             '{room_type_id}',
             'PricingPerRoomTypeController@delete'
         );
         // @TODO create POST room pricing endpoint
     });

