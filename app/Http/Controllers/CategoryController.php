<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public static function getAllCategories(){
        return response()->json(["categories"=>Category::all()]);
    }

    public function addCategory(Request $request){
        $newCategory = new Category;

        $newCategory->name = $request->categoryName;

        $newCategory->save();

        return response()->json(["message"=>"category added"]);
    }

    public function deleteCategory(Request $request){
        Category::where("id",$request->id)->delete();

        return response()->json(["message"=>"category deleted"]);
    }
}
