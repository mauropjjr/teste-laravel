<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UsuarioController extends Controller
{
    public function index()
    {
        return Usuario::with('produto')->orderBy('id', 'desc')->paginate(25);
    }

    public function store(Request $request)
    {
        $regrasValidacao = [
            'nome' => 'required|string',
            'telefone' => 'required|string',
            'celular' => 'required|string',
            'cpf' => 'required|string|cpf',
            'produto_id' => 'required|numeric|gt:0',
            'quantidade' => 'required|numeric|gt:0'
        ];
        // Executa a validação dos dados recebidos
        $validator = Validator::make($request->all(), $regrasValidacao);

        // Se a validação falhar, retorna uma resposta de erro com os detalhes
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        
        return Usuario::create($request->all());
    }

    public function show($id)
    {
        return Usuario::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $Usuario = Usuario::findOrFail($id);
        $Usuario->update($request->all());
        return $Usuario;
    }

    public function destroy($id)
    {
        $Usuario = Usuario::findOrFail($id);
        $Usuario->delete();
        return response()->json(['message' => 'Usuario deleted successfully']);
    }
}