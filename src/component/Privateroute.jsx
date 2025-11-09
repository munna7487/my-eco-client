import React, { use } from 'react';
import { Authcontex } from '../Provider/Authprovider';
import { Navigate } from 'react-router';
import Loading from '../pages/Loading';

const Privateroute = ({children}) => {
    const {user,loading,setloading}=use(Authcontex)

    if(loading)
    {
        return <Loading></Loading>

    }
if( user && user?.email)

  {
      return  children
  }
  return <Navigate to="/login"></Navigate>
        
           
     
    
};

export default Privateroute;