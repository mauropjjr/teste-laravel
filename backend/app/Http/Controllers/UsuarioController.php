<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function index()
    {
        return Usuario::with('produto')->orderBy('id', 'desc')->paginate(25);
    }

    public function store(Request $request)
    {
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