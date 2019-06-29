<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class Room extends Model
{
    protected $table = 'rooms';
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];
    protected $hidden = [
        'hotel_id',
        'room_type_id',
    ];

    public function roomType()
    {
        return $this->hasOne(RoomType::class, 'id', 'room_type_id');
    }

    public function hotel()
    {
        return $this->hasOne(Hotel::class, 'id', 'hotel_id');
    }
}
