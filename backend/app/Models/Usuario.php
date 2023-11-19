<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'usuarios';
    protected $fillable = [
        'nome', 'celular', 'telefone', 'cpf', 'quantidade', 'produto_id'
    ];



    public function produto()
    {
        return $this->belongsTo(Produto::class, 'produto_id');
    }
}
