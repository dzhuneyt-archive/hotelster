<?php

use App\Hotel;
use Illuminate\Database\Seeder;



class HotelsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Increment if needed
        $howManyHotels = 1;

        factory(Hotel::class, $howManyHotels)
            ->create()
            ->each(function ($hotel) {
                /* @var $hotel Hotel */
                $hotelSaved = $hotel->save();
                if (!$hotelSaved) {
                }
            });
    }
}
