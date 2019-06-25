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
Route::apiResource('room_capacities', 'RoomCapacityController');
Route::apiResource('rooms', 'RoomController');

Route::prefix('pricing_per_weekday')
     ->group(function () {
         Route::get(
             '{weekday}/{room_type_id}/{room_capacity_id}',
             'PricingPerWeekdayController@show'
         );
         Route::put(
             '{weekday}/{room_type_id}/{room_capacity_id}',
             'PricingPerWeekdayController@store'
         );
         Route::post(
             '{weekday}/{room_type_id}/{room_capacity_id}',
             'PricingPerWeekdayController@store'
         );
         Route::delete(
             '{weekday}/{room_type_id}/{room_capacity_id}',
             'PricingPerWeekdayController@delete'
         );
         // @TODO create POST room pricing endpoint
     });

Route::prefix('pricing_per_date_range')
     ->group(function () {
         Route::get(
             '{room_type_id}/{room_capacity_id}',
             'PricingPerDateRangeController@index' // index
         );
         Route::get(
             '{room_type_id}/{room_capacity_id}/{range_start}/{range_end}',
             'PricingPerDateRangeController@show' // view
         );
         // @TODO add other CRUD verbs
     });

