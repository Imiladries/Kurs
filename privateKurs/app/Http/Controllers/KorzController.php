<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Korz;

class KorzController extends Controller
{
    public function checkout(Request $request) 
    { 

    try { 
    $korz = new Korz(); 
    $korz->products = json_encode($request->products_in_cart); 
    $korz->user_id = auth()->user()->id; 
    $korz->save(); 
    

    } catch (\Throwable $th) { 
    abort(500, ':((((((((('); 
    } 
    
    return response()->json('Поздравляем с покупкой'); 
    }
}
    