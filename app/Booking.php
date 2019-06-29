<?php

namespace App;

use DateTime;
use Exception;
use Illuminate\Database\Eloquent\Model;



class Booking extends Model
{
    protected $table = 'bookings';

    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
        'user_id',
    ];

    public function room()
    {
        return $this->hasOne(Room::class, 'id', 'room_id');
    }

    /**
     * @return mixed
     * @throws Exception
     */
    public function getTotalNightsAttribute()
    {
        return (new DateTime($this->start))->diff(new DateTime($this->end))->days;
    }

    /**
     * @throws Exception
     */
    public function getIsPastAttribute()
    {
        return new DateTime() > (new DateTime($this->start));
    }

    public function getPriceAttribute()
    {
        $room = Room::with(['roomType'])
                    ->find($this->room_id);
        $priceModel = PricingPerRoomType::where('room_type_id', $room->roomType->id)
                                        ->first();
        return $this->total_nights * $priceModel->daily_price;
    }
}
