import React from 'react';
import Modelcard from './Modelcard';
import { Link } from 'react-router';
import { MdOutlineViewHeadline } from "react-icons/md";
const Active = ({ data }) => {
  // console.log(data);
  return (
    <div className='my-12'>
     <div className='flex justify-between my-6'>
       <h1><span className='text-4xl font-bold'>Active Challange </span ><br /><span className='text-2xl'>Join the movement and make an impact</span></h1>
      <Link to="/allmodels">  
        
    <span className='text-[17px] p-2 border-2 border-blue-700 rounded-xl text-blue-700'>  View All</span>
  {/* <MdOutlineViewHeadline  className='bg-amber-500'/> */}
      </Link>
     </div>
      <div className=' grid grid-cols-3'>
        {
          data.map(model => <Modelcard key={model._id} model={model} />)
        }
      </div>
    </div>
  );
};

export default Active;
