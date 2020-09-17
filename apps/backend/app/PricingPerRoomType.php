<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



/**
 * @property integer weekday_index
 * @property integer room_type_id
 */
class PricingPerRoomType extends Model
{
    protected $table = 'pricing_per_roomtype';

    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
        'room_type_id',
    ];
}
