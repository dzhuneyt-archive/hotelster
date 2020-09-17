<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;



class CreateRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('hotel_id');
            $table->unsignedBigInteger('room_type_id');
            $table->string('room_image_url')
                  ->nullable();

            $table->foreign('room_type_id')
                  ->onDelete('CASCADE')
                  ->onUpdate('CASCADE')
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
        Schema::dropIfExists('rooms');
    }
}
