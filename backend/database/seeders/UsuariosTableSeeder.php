<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Usuario;
use App\Models\Produto;

class UsuariosTableSeeder extends Seeder
{
    public function run()
    {

        $produto = Produto::first(); 

        Usuario::create([
            'nome' => 'Nome do Usuário 1',
            'telefone' => '111-222-3333',
            'celular' => '999-888-7777',
            'cpf' => '111.222.333-44',
            'produto_id' => $produto->id,
            'quantidade' => 3,
        ]);

        Usuario::create([
            'nome' => 'Nome do Usuário 2',
            'telefone' => '444-555-6666',
            'celular' => '777-888-9999',
            'cpf' => '555.666.777-88',
            'produto_id' => $produto->id,
            'quantidade' => 5,
        ]);

        // Adicione quantos usuários de exemplo desejar seguindo o mesmo padrão
    }
}
