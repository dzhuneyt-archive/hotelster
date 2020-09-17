<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;



class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('room_id');

            $table->date('start');
            $table->date('end');
            $table->string('customer_fullname');
            $table->string('customer_email');
            $table->integer('user_id')
                  ->nullable();

            $table->foreign('room_id')
                  ->onDelete('CASCADE')
                  ->onUpdate('CASCADE')
                  ->on('rooms')
                  ->references('id');

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
        Schema::dropIfExists('bookings');
    }
}
