<?php

/* @var $factory Factory */

use App\Booking;
use App\Room;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;



$factory->define(Booking::class, function (Faker $faker) {

    // Create some 14 day bookings
    $date = $faker->dateTimeBetween('-1 month', '+6 months');
    $startDate = $date->format('Y-m-d');

    $howManyDays = $faker->numberBetween(1, 14);
    $date->add(new DateInterval("P{$howManyDays}D"));
    $endDate = $date->format('Y-m-d');


    return [
        'room_id' => Room::all()
                         ->shuffle()
                         ->first()->id,
        'start' => $startDate,
        'end' => $endDate,
        'customer_fullname' => $faker->firstName . ' ' . $faker->lastName,
        'customer_email' => $faker->email,
    ];
});
