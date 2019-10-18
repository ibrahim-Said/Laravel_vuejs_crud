<?php

namespace App\Http\Controllers;

use App\Formation;
use Illuminate\Http\Request;

class FormationController extends Controller
{
    public function getAll(){
        $formation=Formation::all();
        return $formation;
    }
    public function addFormation(Request $request){
        $this->validate($request,[
            'formation'=>'required'
        ]);
        $formation=new Formation();
        $formation->formation=$request->formation;
        $formation->completed=$request->completed;
        $formation->save();
        return Response()->json(['success'=>true]);
    }
    public function editFormation(Request $request){
        $formation=Formation::Find($request->id);
        $formation->formation=$request->formation;
        $formation->completed=$request->completed;
        $formation->save();
        return Response()->json(['success'=>true]);
    }
    public function updateCompleted(Request $request){
        $formation=Formation::find($request->id);
        $formation->completed=!$formation->completed;
        $formation->save();
        return Response()->json(['success'=>true]);
    }
    public function delete(Request $request){
        $formation=Formation::find($request->id);
        if($formation){
            $formation->delete();
            return Response()->json(['success'=>true]);
        }
        return Response()->json(['success'=>false]);

    }
}
