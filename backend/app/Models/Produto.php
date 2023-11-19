<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Produto extends Model
{
    use HasFactory;
    protected $table = 'produtos';

    protected $fillable = [
        'nome', 'descricao', 'valor', 'status'
    ];

    protected $casts = [
        'status' => 'boolean'
    ];

    public function usuarios(): HasMany
    {
        return $this->hasMany(Usuario::class);
    }
}
