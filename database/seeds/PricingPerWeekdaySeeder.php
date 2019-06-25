<?php

use App\PricingPerWeekday;
use App\RoomCapacity;
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
        $roomCapacities = RoomCapacity::all();

        // Add an initial fixed price for each "room_type|room_capacity|weekday" combination
        foreach ($roomTypes as $roomType) {
            foreach ($roomCapacities as $roomCapacity) {
                for ($i = 0; $i < 7; $i++) {
                    PricingPerWeekday::create([
                        'weekday_index' => $i,
                        'room_type_id' => $roomType->id,
                        'room_capacity_id' => $roomCapacity->id,
                        'daily_price' => 99,
                    ]);
                }
            }
        }


    }
}
