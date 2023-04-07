import React from 'react';
import loginBg from '../../images/authentificationPages/loginBg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function RegisterPage() {

    return (
        <section className='w-screen h-screen bg-slate-950 flex flex-row justify-center items-center  gap-6 '>
            {/*  == Register page form == */}
            <div className="container bg-gradient-to-r from-[#D8D5D6] to-gray-500 w-[75%] h-[90%] flex rounded-3xl p-5">
                <div className="register-form w-[70%] flex justify-center items-center">
                    <form action="">
                        {/*  headers */}
                        <div className="user-greeting text-5xl font-bold mb-20">
                            <h2 className='text-white text-center'>Join <span className='text-blue-700'>Us</span></h2>
                        </div>

                        {/* == User name input section == */}


                        <div className="user-section my-4 mx-12 flex justify-center my-12 ">
                            <input type="text" placeholder='Rabie Ouallaf' className='w-72 h-10 rounded-xl p-5 absolute text-center' />
                            <FontAwesomeIcon icon={faUser} className='relative top-3 right-32' />
                        </div>

                        {/* == User email input section == */}


                        <div className="email-section my-4 mx-12 flex justify-center my-12 ">
                            <input type="email" placeholder='rabie@gmail.com' className='w-72 h-10 rounded-xl p-5 absolute text-center' />
                            <FontAwesomeIcon icon={faEnvelope} className='relative top-3 right-32' />

                        </div>

                        {/* == User password input section == */}



                        <div className="password-section my-4 mx-12 flex justify-center my-12">
                            <input type="password" placeholder='*********************************' className='w-72 h-10 rounded-xl p-5 absolute text-center' />
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