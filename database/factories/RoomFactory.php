<?php

/* @var $factory Factory */

use App\Hotel;
use App\Room;
use App\RoomCapacity;
use App\RoomType;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;



$factory->define(Room::class, function (Faker $faker) {

    return [
        'name' => 'Room ' . $faker->numberBetween(101, 999),
        'room_image_url' => $faker->imageUrl(),

        'hotel_id' => Hotel::all()
                           ->shuffle()
                           ->first()->id,
        'room_type_id' => RoomType::all()
                                  ->shuffle()
                                  ->first()->id,
        'room_capacity_id' => RoomCapacity::all()
                                          ->shuffle()
                                          ->first()->id,
    ];
});
