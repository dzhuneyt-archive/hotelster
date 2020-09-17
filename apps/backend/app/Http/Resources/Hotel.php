<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;



class Hotel extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        // No need to unset any fields, so return it as it is
        return parent::toArray($request);
    }
}
