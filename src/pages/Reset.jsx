import React, { useContext, useRef } from 'react';
import { Authcontex } from '../Provider/Authprovider';
import { toast } from 'react-toastify';

const Reset = () => {
    const {  resetpass } = useContext(Authcontex); 
    const emailref = useRef(null)
   const resetpassword=(e)=>{
  e.preventDefault();
   const email=e.target.email.value;
   const password=e.target.password.value;
   console.log(email,password)
//reset 
 resetpass(emailref.current.value)
            .then(res => {
                toast.success("check your email")
            })
            .catch((e) => {
                toast.error(e.message)
            })

   }
    return (
        <div className='flex justify-center items-center  m-5'>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form  onSubmit={resetpassword} className="card-body">
        <fieldset className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" name="email" ref={emailref}
           placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" name="password"
           placeholder="Password" />
          {/* <div><a className="link link-hover">Forgot password?</a></div> */}
          <button className="btn btn-neutral mt-4">Reset password</button>
        </fieldset>
      </form>
    </div>
        </div>
 


       
    );
};

export default Reset;