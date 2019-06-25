<?php

use Illuminate\Database\Seeder;



class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            HotelsSeeder::class,
            RoomtypeSeeder::class,
            RoomCapacitySeeder::class,
            RoomSeeder::class,
        ]);
    }
}
