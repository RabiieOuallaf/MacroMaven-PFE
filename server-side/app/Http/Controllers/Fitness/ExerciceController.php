<?php

namespace App\Http\Controllers\Fitness;

use App\Http\Controllers\Controller;
use App\Models\Exercice;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ExerciceController extends Controller
{
    static public function addExercice(Request $request): ?JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'exercice_name' => 'required|string|max:255',
            'exercice_sets' => 'required',
            'exercice_repetition' => 'required',
            'exercice_image' => 'required|string',
            'exercice_category' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json(['erorrs' => $validator->errors()], 400);
        }
        // Get the validated data 
        $formFields = $validator->validated();
        $Exercice = Exercice::create($formFields);

        if ($Exercice) {
            return response()->json(['Message' => 'Exercice added successfully !', 201]);
        } else {
            return response()->json(['Error' => "There's a problem , please try later"], 401);
        }
    }

    static public function updateExercice(Request $request): ?JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'exercice_name' => 'required|string|max:255',
            'exercice_sets' => 'required',
            'exercice_repetition' => 'required',
            'exercice_image' => 'required|string',
            'exercice_category' => 'required|string',
            'id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['erorrs' => $validator->errors()], 400);
        }
        // Get the validated data 
        $formFields = $validator->validated();
        $Exercice = Exercice::find($formFields['id']);

        if ($Exercice->update($formFields)) {
            return response()->json(['Message' => 'Exercice updated successfully !', 200]);
        } else {
            return response()->json(['Error' => "There's a problem , please try later"], 401);
        }
    }

    static public function displayExercicesByCategory(Request $request): ?JsonResponse
    {
        $category_name = $request->input('category_name');
        $exercices = Exercice::where('exercice_category', $category_name)->get();

        return response()->json(['exercices' => $exercices], 200);
    }

    static public function getExerciceById(Request $request) : ?JsonResponse 
    {
        $id = self::validateExerciceId($request);
        $exercice = Exercice::find($id);

        return response()->json(['Exercice' => $exercice], 200);
    }

    static public function deleteExercice(Request $request): ?JsonResponse
    {

        $id = self::validateExerciceId($request);
        $exercice = Exercice::find($id);

        if ($exercice->delete()) {
            return response()->json(['Message' => 'Exercice deleted successfully !'], 200);
        } else {
            return response()->json(['Message' => "There's a problem , please try later"]);
        }
    }

    static public function getExercices() :? JsonResponse 
    {
        $exercices = Exercice::all();
        return response()->json(['Exercices' => $exercices], 200);
    }


    static private function validateExerciceId($request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['erorrs' => $validator->errors()], 400);
        }
        $data = $validator->validated();
        return $data['id'];
    }
}
