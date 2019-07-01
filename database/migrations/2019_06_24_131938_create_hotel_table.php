<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;



class CreateHotelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');

            $table->text('address');
            $table->string('city');
            $table->string('state');
            $table->string('country');

            // Given the zip code can vary in terms of formats, store it as string
            $table->string('zip_code');

            // Defined as string, because may include special characters. Examples: "+359/328888" or "0894/123456"
            $table->string('phone_number');
            $table->string('email');
            $table->string('image_url');
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
        Schema::dropIfExists('hotels');
    }
}
