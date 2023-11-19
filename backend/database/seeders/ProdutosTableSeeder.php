<?php

namespace Database\Seeders;

use App\Models\Produto;
use Illuminate\Database\Seeder;

class ProdutosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Produto::create([
            'nome' => 'Produto 1',
            'descricao' => 'Descrição do Produto 1',
            'valor' => 10.99,
            'status' => true,
        ]);

        Produto::create([
            'nome' => 'Produto 2',
            'descricao' => 'Descrição do Produto 2',
            'valor' => 20.50,
            'status' => true,
        ]);
    }
}
