<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddKeyToMonster extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('monster', function (Blueprint $table) {
            $table->foreignId('category_id');
            $table->foreign('category_id')->references('id')->on('category')->onDelete('Cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('monster', function (Blueprint $table) {
            $table->dropForeign('lists_category_id_foreign');
            $table->dropColumn('category_id');
        });
    }
}
