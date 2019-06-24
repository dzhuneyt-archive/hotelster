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

}
