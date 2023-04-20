import React, { useEffect, useRef, useState } from 'react';
import ananadi from '../../images/authentificationPages/ananadi.JPG';
import Navbar from '../utils/main/Navbar';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


function UpdateProfile() {

    const [userData, setUserData] = useState('');
    const user_id = localStorage.getItem('user_id');
    const inputRef = useRef(null)
    const [pictureUrl, setPictureUrl] = useState(null);
    const [picture, setPicture] = useState('');

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
                setPicture(response.data.secure_url)

            })
            .catch((erorr) => {
                console.log(erorr)
            })

        const reader = new FileReader();

        reader.onload = (e) => {
            setPictureUrl(e.target.result)
        }


        if (file) {
            reader.readAsDataURL(file);

        }
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        inputRef.current.click();
    }

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/api/auth/getuser', { user_id })
            .then((response) => {
                setUserData(response.data.userData);
                console.log(userData.birthday);
                setPicture(userData.picture)
            })
            .catch((error) => {
                console.log(error)
            })
        // const formattedDate = new Date(userData.birthday).toISOString().substr(0, 10);
    }, [])
    return (
        <section className="update-profile bg-slate-900 w-screen h-screen">

            <div className="navbar p-4">
                <Navbar />
            </div>

            <div className=' h-[12%] w-[92%] p-2 absolute left-[2%] flex items-center my-10'>
                <img src={userData.picture} alt="sender profile image" className='w-12 h-12 border-2 rounded-[100%] mx-6 cursor-pointer' />
                <h4 className='text-white font-semibold'><span className='text-blue-500 cursor-pointer hover:text-white duration-200 ease-out'>{userData.name}</span></h4>

            </div>

                <form action="" className='w-full h-[90%] flex justify-around items-center flex-row'>
            <div className="update-section w-full h-[80%] flex justify-around items-center flex-row">
                    <div className="profile-data">

                        <div className="name-section flex flex-col">
                            <label className='font-semibold text-white text-[16px] mb-3 '>Name</label>
                            <input type="text" className=' bg-slate-950 rounded-md p-1 text-white' placeholder={userData.name} />
                            <span className='text-neutral-600 text-sm mt-3 pl-5'> Your name will appear around macroMaven website. </span>
                        </div>

                        <div className="birthday-section flex flex-col ">
                            <label className='font-semibold text-white text-[16px] mb-3 '>Birthday</label>
                            <input type="date" className=' bg-slate-950 rounded-md p-1 text-white' />
                            <span className='text-neutral-600 text-sm mt-3 pl-5'> Your birthday will appear only for you. </span>
                        </div>

                    </div>

                    <div className="profile-picture">
                        <img
                            src={picture}
                            alt="Profile Picture"
                            className='w-48 h-48 m-auto rounded-full shadow cursor-pointer'
                            onClick={handleButtonClick}
                        />
                        <input
                            type="file"
                            name='picture'
                            onChange={handlePictureChange}
                            className='hidden'
                            ref={inputRef}

                        />


                    </div>


            </div>
                </form>
        </section>

    )
}

export default UpdateProfile