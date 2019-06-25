<?php

use App\PricingPerDateRange;
use App\PricingPerWeekday;
use App\RoomCapacity;
use App\RoomType;
use Illuminate\Database\Seeder;



class PricingPerDateRangeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @param \Faker\Generator $faker
     * @return void
     * @throws Exception
     */
    public function run(\Faker\Generator $faker)
    {
        $howManyCustomRangesPerCombination = 5;

        $roomTypes = RoomType::all();
        $roomCapacities = RoomCapacity::all();

        // For every room type and room capacity combination,
        // add random custom date ranges with custom daily prices
        foreach ($roomTypes as $roomType) {
            foreach ($roomCapacities as $roomCapacity) {
                for ($i = 0; $i < $howManyCustomRangesPerCombination; $i++) {

                    $rangeDays = $faker->numberBetween(1, 30);
                    $rangeStartDT = $faker->dateTimeBetween('-7 days', '+3 months');
                    $rangeStartFormatted = $rangeStartDT->format('Y-m-d');
                    $rangeEnd = $rangeStartDT->add(new DateInterval("P{$rangeDays}D"));
                    $rangeEndFormatted = $rangeEnd->format('Y-m-d');

                    PricingPerDateRange::create([
                        'range_start' => $rangeStartFormatted,
                        'range_end' => $rangeEndFormatted,
                        'room_type_id' => $roomType->id,
                        'room_capacity_id' => $roomCapacity->id,
                        'daily_price' => $faker->numberBetween(50, 150),
                    ]);
                }
            }
        }
    }
}
