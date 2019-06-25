<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



/**
 * @property integer weekday_index
 * @property integer room_type_id
 * @property integer room_capacity_id
 */
class PricingPerWeekday extends Model
{
    protected $table = 'pricing_per_weekdays';

    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
        'room_type_id',
        'room_capacity_id',
    ];
}
