import React from "react";
import googleIcon from '../../icons/googleIcon.png';
import fitness from '../../images/fitness.png'
import { Link } from "react-router-dom";

function Authentification() {


    return (

        <section className="authentificationContainer w-screen h-screen bg-slate-950 flex flex-col justify-center items-center gap-6">
            {/* Google authentification */}
            <div className="text-white flex items-center justify-center gap-3 cursor-pointer">
                <img src={fitness} alt="google icon" className="w-8 h-8"/>
                <span className="">MacroMaven</span>
            </div>

            {/* Login button */}
            <div className="loginButton flex flex-col gap-3">
                <button className="w-52 rounded-md p-1 text-white bg-blue-600 shadow-blue-500/50 "><Link to='/login'>Login</Link></button>
                <span className="text-white text-sm">You don't have an account?  <Link to="register" className="text-blue-500"> Register </Link></span>
            </div>
        </section>
    )
}

export default Authentification;