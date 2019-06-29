<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;



class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {

        $res = parent::toArray($request);

        $res['total_nights'] = $this->total_nights;
        $res['price'] = $this->price;
        $res['is_past'] = $this->is_past;

        unset($res['room_id']);
        return $res;
    }
}
