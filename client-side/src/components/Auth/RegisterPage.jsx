import React, { useEffect, useRef, useState } from 'react';
import loginBg from '../../images/authentificationPages/loginBg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faEnvelope, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from '@cloudinary/url-gen';


function RegisterPage() {

    const myImage = new CloudinaryImage('sample', { cloudName: 'drfwsaasz' }).resize(fill().width(100).height(150));
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState(Date);
    const [pictureUrl, setPictureUrl] = useState(null);
    const [picture, setPicture] = useState('');
    const inputRef = useRef(null)
    const navigate = useNavigate();


    useEffect(() => {
        const isAuthenticated = !!localStorage.getItem('token');
        if (isAuthenticated) {
            navigate('/home');
        }
    }, [])

    const handleRegisterForm = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/auth/register', { email, password, birthday, name, picture, authenticationType: 'email' })
            .then((response) => {
                console.log(response)
                localStorage.setItem('token', response.data.message.original.Token);
                localStorage.setItem('user_id', response.data.message.original.user_id);

            })
            .catch((error => {
                console.error(` The erorr is : ${error}`);
            }))

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

    return (

        <section className='w-screen h-screen bg-slate-950 flex flex-row justify-center items-center  gap-6 '>
            {/*  == Register page form == */}
            <div className="container bg-gradient-to-r from-[#D8D5D6] to-gray-500 w-[75%] h-[90%] flex rounded-3xl p-5">
                <div className="register-form w-[70%] flex justify-center items-center">
                    <form onSubmit={handleRegisterForm} className='flex flex-col justify-around'>
                        {/*  headers */}
                        <div className="user-greeting text-5xl font-bold mb-18">
                            <h2 className='text-white text-center'>Join <span className='text-blue-700'>Us</span></h2>
                        </div>

                        {/* == User name input section == */}

                        <div className="user-picture cursor-pointer flex justify-center">


                            <input
                                type="file"
                                name='picture'
                                onChange={handlePictureChange}
                                className='hidden'
                                ref={inputRef}



                            />
                            {pictureUrl ? (
                                <img
                                    src={pictureUrl}
                                    alt="Profile Picture"
                                    className='w-28 h-28 m-auto rounded-full shadow'
                                    onClick={handleButtonClick}
                                />
                            ) :

                                <button
                                    onClick={handleButtonClick}
                                    className='
                                    w-32
                                    bg-blue-500 
                                    hover:bg-blue-400
                                    duration-300
                                    ease-in
                                    rounded-lg
                                    text-white
                                    text-center
                                    p-2
                                    '
                                >
                                    <FontAwesomeIcon icon={faUpload} /><br />
                                    Profile Picture
                                </button>

                            }
                        </div>


                        <div className="user-section my-4 mx-12 flex justify-center">
                            <input
                                type="text"
                                placeholder='Rabie Ouallaf'
                                className='w-72 h-10 rounded-xl p-5 absolute text-center'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <FontAwesomeIcon icon={faUser} className='relative top-3 right-32' />
                        </div>

                        {/* == User email input section == */}


                        <div className="email-section my-4 mx-12 flex justify-center ">
                            <input
                                type="email"
                                placeholder='rabie@gmail.com'
                                className='w-72 h-10 rounded-xl p-5 absolute text-center'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                            <FontAwesomeIcon icon={faEnvelope} className='relative top-3 right-32' />

                        </div>

                        {/* == User bithday == */}
                        <div className="email-section my-4 mx-12 flex justify-center items-center ">
                            <input
                                type="date"
                                placeholder='rabie@gmail.com'
                                className='w-72 h-10 rounded-xl text-center'
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                            />
                        </div>

                        {/* == User password input section == */}



                        <div className="password-section my-4 mx-12 flex justify-center">
                            <input
                                type="password"
                                placeholder='*********************************'
                                className='w-72 h-10 rounded-xl p-5 absolute text-center'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FontAwesomeIcon icon={faLock} className='relative top-3 right-32' />
                        </div>

                        <div className='my-4 mx-20 flex justify-center flex-col '>
                            <button className='text-white w-48 p-1 bg-blue-600 rounded-lg hover:bg-blue-500 duration-500 ease-in-out' >Register</button>
                            <span className="text-white text-sm">You have an account?  <Link to="/login" className="text-blue-500"> Login </Link></span>

                        </div>

                    </form>
                </div>

                {/*  == Register page image == */}
                <div className="resgister-image">
                    <img src={loginBg} alt="african man doing pull ups" className='h-[91.6%] absolute top-5 right-[105px]' />
                </div>
            </div>

        </section>
    )
}

export default RegisterPage