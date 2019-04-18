<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['guest:web'])->group(function () {
    Route::get('/auth/login', '\Modules\Auth\Controller\LoginController@show')->name('auth.show');
    Route::post('/auth/login', '\Modules\Auth\Controller\LoginController@login')->name('auth.login');
});



