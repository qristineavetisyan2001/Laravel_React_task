<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public static function getAllProducts(Request $request){
        return response()->json(["products"=>Product::where("category_id", $request->categoryId)->get()]);
    }

    public function addProduct(Request $request){
        $newProduct = new Product;

        $newProduct->name = $request->productName;
        $newProduct->category_id = $request->categoryId;
        $newProduct->price = $request->price;

        $newProduct->save();

        return response()->json(["message"=>"product added"]);
    }

    public function editProduct(Request $request) {
        $product = Product::where("id",$request->id)->get()->first();

        $product->name = $request->newName;
        $product->price = $request->newPrice;

        $product->save();
    }

    public function deleteProduct(Request $request){
        /**/
        Product::where("id",$request->id)->delete();
        return response()->json(["message"=>"product deleted"]);
    }
}
