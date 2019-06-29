<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class RoomType extends Model
{

    protected $table = 'room_types';

    protected $guarded = [
        'id',
        'created_at',
        'updated_at'
    ];

    public function rooms()
    {
        return $this->hasMany(Room::class, 'room_type_id');
    }

    public function getDailyPriceAttribute()
    {
        return PricingPerRoomType::where('room_type_id', $this->id)
                                 ->value('daily_price');
    }
}
