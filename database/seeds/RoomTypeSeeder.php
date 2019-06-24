<?php

use Illuminate\Database\Seeder;



class RoomTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\RoomType::create(['name' => 'Regular']);
        \App\RoomType::create(['name' => 'Premium']);
        \App\RoomType::create(['name' => 'Deluxe']);
    }
}
