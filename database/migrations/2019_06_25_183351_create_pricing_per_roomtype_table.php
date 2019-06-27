<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;



class CreatePricingPerRoomTypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pricing_per_roomtype', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('room_type_id');
            $table->integer('daily_price')
                  ->comment('Daily price for this room type in USD');

            $table->foreign('room_type_id')
                  ->references('id')
                  ->on('room_types');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pricing_per_roomtype');
    }
}
