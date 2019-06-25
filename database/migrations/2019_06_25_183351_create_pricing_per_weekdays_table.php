<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;



class CreatePricingPerWeekdaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pricing_per_weekdays', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->smallInteger('weekday_index')
                  ->comment('0 - Monday, 6 - Sunday');
            $table->unsignedBigInteger('room_type_id');
            $table->unsignedBigInteger('room_capacity_id');
            $table->integer('daily_price')
                  ->comment('Daily price for that weekday in USD');

            $table->foreign('room_type_id')
                  ->references('id')
                  ->on('room_types');

            $table->foreign('room_capacity_id')
                  ->references('id')
                  ->on('room_capacities');
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
        Schema::dropIfExists('pricing_per_weekdays');
    }
}
