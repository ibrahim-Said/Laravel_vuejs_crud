<?php

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::get('formation', 'FormationController@getAll');
    Route::delete('deleteFormation/{id}', 'FormationController@delete');
    Route::post('toggelCompleted/{id}', 'FormationController@updateCompleted');
    Route::post('addformation', 'FormationController@addFormation');
    Route::post('editformation', 'FormationController@editFormation');

});