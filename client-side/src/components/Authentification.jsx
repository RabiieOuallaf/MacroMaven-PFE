import React from "react";
import googleIcon from '../icons/googleIcon.png';

function Authentification() {
    

    return (

        <section className="authentificationContainer w-screen h-screen bg-slate-950 flex flex-col justify-center items-center gap-6">
            {/* Google authentification */}
            <div className="text-white flex items-center gap-3 cursor-pointer">
                <img src={googleIcon} alt="google icon" className="w-8 h-8"/>
                <span className="">Google authentification </span>
            </div>

            {/* Login button */}
            <div className="loginButton flex flex-col gap-3">
                <button className="w-52 rounded-md p-1 text-white bg-blue-600 shadow-blue-500/50 ">Login</button>
                <span className="text-white text-sm">You don't have an account?<a href="/register" className="text-blue-500 drop-shadow-2xl ">Register</a></span>
            </div>
        </section>
    )
}

export default Authentification;