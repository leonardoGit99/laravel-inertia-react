<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;


Route::resource('posts', PostController::class);

    
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
