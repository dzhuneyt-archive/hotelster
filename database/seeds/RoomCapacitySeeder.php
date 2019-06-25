<?php

use Illuminate\Database\Seeder;



class RoomCapacitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\RoomCapacity::create(['name' => 'Single']);
        \App\RoomCapacity::create(['name' => 'Double']);
        \App\RoomCapacity::create(['name' => 'Family']);
    }
}
