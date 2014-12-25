<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::group(array('prefix' => 'animation'), function(){
	Route::post('new', function(){
		if(Input::get('animation-name') === ""){
			return Response::json(array(
				"error" => "no name"
			), 400);
		}

		$animation=new Animation;
		$animation->name=Input::get('animation-name');
		$animation->save();

		return Response::json(array(
			"id" => $animation->id,
			"name" => $animation->name
		), 200);

	});
});
