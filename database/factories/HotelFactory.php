<?php

use App\Hotel;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;



/* @var $factory Factory */
$factory->define(Hotel::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'address' => $faker->address,
        'city' => $faker->city,
        'state' => $faker->words(1, true),
        'country' => $faker->country,
        'zip_code' => $faker->postcode,
        'phone_number' => $faker->phoneNumber,
        'email' => $faker->email,
        'image_url' => $faker->imageUrl(),
    ];
});
