<?php

/* @var $factory Factory */

use App\Hotel;
use App\Room;
use App\RoomType;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;



$incrementRooms = 0;
$factory->define(Room::class, function (Faker $faker) use (&$incrementRooms) {

    $incrementRooms++;
    return [
        'name' => 'Room #' . $incrementRooms,
        'room_image_url' => $faker->imageUrl(),

        'hotel_id' => Hotel::all()
                           ->shuffle()
                           ->first()->id,
        'room_type_id' => RoomType::all()
                                  ->shuffle()
                                  ->first()->id,
    ];
});
