import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // react-router-dom use korte hobe
import { Authcontex } from '../Provider/Authprovider';
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { GoogleAuthProvider } from "firebase/auth"; // GoogleAuthProvider import korte hobe
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const { signin, googlesign, resetpass } = useContext(Authcontex); // useContext hobe
    const [error, seterror] = useState("");
    const [show, setshow] = useState(false);
    const [pass, setpass] = useState("");
    //    const [email,setemail]=useState(null)
    const emailref = useRef(null)
    //  console.log(email)
    const handlelogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        //         console.log({ email, password });
        // ///reset pass


        const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9\s]).{6,}$/;
        // Password length check
        if (!regex.test(password)) {
            // toast.error(" need Password must include uppercase, lowercase, special char & be at least 6 characters");
            setpass(" Password must include uppercase, lowercase, special char & be at least 6 characters")
            return;
        }


        signin(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);
                toast('Sign in successfully');
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterror(errorCode);
            });


    };
    const handleforgetpassword = (e) => {
        console.log(emailref.current.value)
        resetpass(emailref.current.value)
            .then(res => {
                toast.success("check your email")
            })
            .catch((e) => {
                toast.error(e.message)
            })


    }

    // Google sign in
    const handlegooglesignin = () => {
        googlesign()
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                // console.log(user);
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData?.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                seterror(errorCode);
            });
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='text-center text-2xl font-bold py-5'>Login to EcoTrack</h1>
                <form onSubmit={handlelogin} className="card-body">
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email"
                            ref={emailref}
                            //  value={email}
                            // onChange={(e) => setemail(e.target.value)}
                            className="input" placeholder="Email" />

                        <div className='relative'>
                            {/* Password */}
                            <label className="label">Password</label>
                            <input
                                name='password'
                                type={show ? "text" : "password"}
                                className="input"
                                placeholder="Password"
                            />
                            <span
                                onClick={() => setshow(!show)}
                                className='absolute right-[28px] top-[35px] cursor-pointer'
                            >
                                {show ? <IoIosEyeOff /> : <FaEye />}
                            </span>
                            {pass && (
  <p className="text-red-600 text-sm mt-1">{pass}</p>
)}
                        </div>

                        <div><Link to="/reset" type='button' onClick={handleforgetpassword} className="link link-hover">Forgot password?</Link></div>

                        {error && <p className='text-red-600'>{error}</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>

                        {/* Google Sign In */}
                        <button
                            type='button'
                            onClick={handlegooglesignin}
                            className="btn bg-white text-black border-[#e5e5e5] mt-2"
                        >
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <g>
                                    <path d="m0 0H512V512H0" fill="#fff"></path>
                                    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                    <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                    <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                    <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                                </g>
                            </svg>
                            Login with Google
                        </button>

                        <h1 className='text-[15px] font-semibold text-center mt-3'>
                            Do you have an account?
                            <Link className='text-blue-500 ml-1' to="/register">Register</Link>
                        </h1>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;
