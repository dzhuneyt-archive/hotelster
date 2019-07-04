<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;



class RoomResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $arr = parent::toArray($request);

        $arr['daily_price'] = $this->daily_price;
        return $arr;
    }
}
