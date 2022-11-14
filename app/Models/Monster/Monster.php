<?php

namespace App\Models\Monster;

use Illuminate\Database\Eloquent\Model;

class Monster extends Model
{
    protected $table = 'monster';

    protected $fillable = [
        'name',
        'level',
        'heat',
        'armor',
        'streight',
        'dexterity',
        'physique',
        'intelligence',
        'wisdom',
        'charisma',
        'description',
        'image'
    ];
}