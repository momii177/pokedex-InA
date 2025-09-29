<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PokemonController extends Controller
{
    public function index(Request $request)
    {
        $page = (int) $request->get('page', 1);
        $limit = (int) $request->get('limit', 10);
        $offset = ($page - 1) * $limit;

        // Fetch base list
        $response = Http::get("https://pokeapi.co/api/v2/pokemon?limit={$limit}&offset={$offset}");
        $pokemons = $response->json()['results'];

        $data = [];
        foreach ($pokemons as $pokemon) {
            $details = Http::get($pokemon['url'])->json();
            $data[] = [
                'name'   => $details['name'],
                'image'  => $details['sprites']['other']['official-artwork']['front_default'],
                'types'  => array_map(fn($t) => $t['type']['name'], $details['types']),
                'height' => $details['height'],
                'weight' => $details['weight'],
            ];
        }

        return response()->json($data);
    }
}
