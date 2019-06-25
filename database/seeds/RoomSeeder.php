<?php

use App\Room;
use Illuminate\Database\Seeder;



class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Increment if needed
        $howManyRooms = 10;

        factory(Room::class, $howManyRooms)
            ->create()
            ->each(function ($model) {
                /* @var $model Room */
            });
    }
}
