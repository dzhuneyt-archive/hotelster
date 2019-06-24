<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class Hotel extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'hotels';

    // Allow all fields to be updated massively, except these
    protected $guarded = [
        'id',
        'created_at',
        'updated_at'
    ];
}
