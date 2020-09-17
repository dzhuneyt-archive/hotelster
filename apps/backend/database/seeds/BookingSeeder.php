<?php

use App\Booking;
use App\Room;
use Illuminate\Database\Seeder;



class BookingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Increment if needed
        $howManyBookings = 50;

        factory(Booking::class, $howManyBookings)
            ->create()
            ->each(function ($model) {
                /* @var $model Room */
            });
    }
}
