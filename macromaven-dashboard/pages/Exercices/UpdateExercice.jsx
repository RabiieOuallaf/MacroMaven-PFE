import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';

function UpdateExercice() {
    const [repetition, setRepetition] = useState();
    const [sets, setSets] = useState('');
    const [category, setCategory] = useState('');
    const [exerciceName, setExerciceName] = useState('');
    const [image, setImage] = useState('');

    const router = useRouter();
    const {id} = router.query;

    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios.put('http://127.0.0.1:8000/api/fitness/updateexercice', {
            exercice_name: exerciceName,
            exercice_sets: sets,
            exercice_repetition: repetition,
            exercice_category: category,
            exercice_image: image,
            id 
        })
            .then((response) => {
                Swal.fire(
                    'Exercice updated seccussfully!',
                    'success'
                )

                console.log(response)
            })
            .catch((erorr) => {
                console.log(erorr);
            })
    }

    const handleRepetionChange = (e, selectBox) => {
        switch (selectBox) {
            case 'repetition':
                setRepetition(e.target.value);
                break;
            case 'category':
                setCategory(e.target.value);
                break;
            case 'set':
                setSets(e.target.value);
                break;
            default:
                Swal.fire({
                    title: 'Error!',
                    text: 'Please check your options!',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                });
        }
    }

    const handleExerciceNameChange = (e) => {
        setExerciceName(e.target.value);
    }

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'iih51pyv');

        axios.defaults.withCredentials = false;

        axios.post('https://api.cloudinary.com/v1_1/drfwsaasz/upload', formData, {
            headers: 'Access-Control-Allow-Origin'
        })
            .then((response) => {
                setImage(response.data.secure_url)
                console.log(image);

            })
            .catch((erorr) => {
                console.log(erorr)
            })
    }
    useEffect( () => {
        axios.get('http://127.0.0.1:8000/api/fitness/getexercicebyid',{params :{id}})
        .then( (response) => {
            console.log(response.data.Exercice)
            setRepetition(response.data.Exercice.exercice_repetition);
            setSets(response.data.Exercice.exercice_sets);
            setExerciceName(response.data.Exercice.exercice_name);
            setImage(response.data.Exercice.exercice_image);
            setCategory(response.data.Exercice.exercice_category)
        })
        .catch( (error) =>  {
            console.log(error )
        })
    }, [])
    return (
        <div className="exercice-container bg-gray-900 min-h-screen p-10">
            <section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 p-10">
                <Head>
                    <h1 class="text-xl font-bold text-white capitalize dark:text-white">Update exercice</h1>
                </Head>
                <form onSubmit={handleFormSubmit}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-white dark:text-gray-200" for="username">Exercice name</label>
                            <input
                                id="exercice_name"
                                value={exerciceName}
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                onChange={(e) => handleExerciceNameChange(e)}
                            />
                        </div>

                        <div>
                            <label class="text-white dark:text-gray-200" for="passwordConfirmation">Repetitions</label>
                            <select name="exercice_repetition"  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={(e) => handleRepetionChange(e, 'repetition')}>
                                <option value={repetition}>{repetition}</option>
                                <option value={15}>15</option>
                                <option value={12}>12</option>
                                <option value={10}>10</option>
                                <option value={8}>8</option>
                                <option value={6}>6</option>
                            </select>
                        </div>

                        <div>
                            <label class="text-white dark:text-gray-200" for="passwordConfirmation">Sets</label>
                            <select name="exercice_sets" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={(e) => handleRepetionChange(e, 'set')}>
                                <option value={sets}>{sets}</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>

                        <div>
                            <label class="text-white dark:text-gray-200" for="passwordConfirmation">Category</label>
                            <select name="exercice_category" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={(e) => handleRepetionChange(e, 'category')} >
                                <option value={category}>{category}</option>

                                <option>Surabaya</option>
                                <option>Jakarta</option>
                                <option>Tangerang</option>
                                <option>Bandung</option>
                            </select>
                        </div>


                        <div>
                            <label class="block text-sm font-medium text-white">
                                Image
                            </label>
                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div class="space-y-1 text-center">
                                    <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div class="flex text-sm text-gray-600">
                                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span class="">Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" class="sr-only" onChange={(e) => handlePictureChange(e)} />
                                        </label>
                                        <p class="pl-1 text-white">or drag and drop</p>
                                    </div>
                                    <p class="text-xs text-white">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end mt-6">
                        <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default UpdateExercice