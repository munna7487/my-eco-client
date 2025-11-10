import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Fixed: 'react-router' → 'react-router-dom'
import { Authcontex } from '../Provider/Authprovider';
import { toast } from 'react-toastify';
import { MdRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createuser, updateuser } = useContext(Authcontex);
  const [show, setshow] = useState(false);
  const navigate = useNavigate(); 

  const handleregister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const email = e.target.email.value;

    // Password length check
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    createuser(email, password)
      .then((userCredential) => {
        const firebaseUser = userCredential.user;

        // Update profile (name + photo)
        updateuser({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success('Registration successful!');
            
            navigate("/");
          })
          .catch((error) => {
            console.log('Profile update error:', error);
            toast.error('Profile update failed');
            // navigate("/"); 
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center text-2xl font-bold py-5">Join EcoTrack</h1>
          <form onSubmit={handleregister} className="card-body">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Your Name</label>
              <input name="name" type="text" className="input" placeholder="your name" required />

              {/* Photo URL */}
              <label className="label">Photo Url</label>
              <input name="photo" type="text" className="input" placeholder="Photo Url" />

              {/* Email */}
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" required />

              {/* Password */}
              <div className='relative'>
                <label className="label">Password</label>
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  className="input w-full"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setshow(!show)}
                  className='absolute right-4 top-7 cursor-pointer text-xl'
                >
                  {show ? <FaEyeSlash /> : <MdRemoveRedEye />}
                </span>
              </div>

              <button type="submit" className="btn btn-neutral mt-6 w-full">
                Register
              </button>

              <h1 className="text-[15px] font-semibold text-center mt-4">
                Already have an account? <Link className="text-blue-600 underline" to="/login">Login</Link>
              </h1>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;