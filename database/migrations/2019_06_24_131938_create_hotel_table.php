<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;



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

            // @TODO refine if names larger than 255 characters are allowed for a hotel name
            $table->string('name');

            $table->text('address');
            $table->string('city');
            $table->string('state');
            $table->string('country');

            // @TODO does it support numbers only, always? Research zip code formats in different countries
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
