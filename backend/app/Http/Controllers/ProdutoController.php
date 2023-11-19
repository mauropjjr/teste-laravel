<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProdutoRequest;
use App\Http\Requests\UpdateProdutoRequest;
use App\Models\Produto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProdutoController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->input('status');
        $query = Produto::query(); // Cria a consulta inicial    
        if ($status !== null) {
            $query->where('status', $status);
        }

        return  $query->paginate(25);
    }

    public function store(Request $request)
    {
        $regrasValidacao = [
            'nome' => 'required|string',
            'descricao' => 'required|string',
            'valor' => 'required|numeric'
        ];
        // Executa a validação dos dados recebidos
        $validator = Validator::make($request->all(), $regrasValidacao);

        // Se a validação falhar, retorna uma resposta de erro com os detalhes
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        return Produto::create($request->all());
    }

    public function show($id)
    {
        return Produto::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $Produto = Produto::findOrFail($id);
        $Produto->update($request->all());
        return $Produto;
    }

    public function destroy($id)
    {
        $Produto = Produto::findOrFail($id);
        if ($Produto->usuarios()->exists()) {
            return response()->json(['message' => 'Existem usuários associados a este produto'], 400);
        }

        $Produto->delete();
        return response()->json(['message' => 'Produto deleted successfully']);
    }
}
