<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/




Route::post('/registration', [UserController::class, 'registration']);
Route::post('/login', [UserController::class, 'login']);

Route::get('/getCategories', [CategoryController::class, "getAllCategories"]);
Route::post('/addCategory', [CategoryController::class, 'addCategory']);
Route::post('/deleteCategory', [CategoryController::class, 'deleteCategory']);


Route::post('/getProducts', [ProductController::class, "getAllProducts"]);
Route::post('/addProduct', [ProductController::class, 'addProduct']);
Route::post('/deleteProduct', [ProductController::class, 'deleteProduct']);
Route::post('/editProduct', [ProductController::class, 'editProduct']);
