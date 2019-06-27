<?php

use App\PricingPerWeekday;
use App\RoomType;
use Illuminate\Database\Seeder;



class PricingPerWeekdaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roomTypes = RoomType::all();

        // Add an initial fixed price for each room_type
        foreach ($roomTypes as $roomType) {
            PricingPerWeekday::create([
                'room_type_id' => $roomType->id,
                'daily_price' => 99,
            ]);
        }


    }
}
