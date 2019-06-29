<?php

use App\PricingPerRoomType;
use App\RoomType;
use Illuminate\Database\Seeder;



class PricingPerRoomTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roomTypes = RoomType::all();

        $randomPrice = 109;

        // Add an initial fixed price for each room_type
        foreach ($roomTypes as $roomType) {
            PricingPerRoomType::create([
                'room_type_id' => $roomType->id,
                'daily_price' => $randomPrice,
            ]);

            $randomPrice = $randomPrice + 10;
        }


    }
}
