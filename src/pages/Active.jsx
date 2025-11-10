import React from 'react';
import Modelcard from './Modelcard';
import { Link } from 'react-router';
import { MdOutlineViewHeadline } from "react-icons/md";
const Active = ({ data }) => {
  // console.log(data);
  return (
    <div>
     <div className='flex justify-between'>
       <h1>Latest</h1>
      <Link to="/allmodels">  
        
  view All
  <MdOutlineViewHeadline  className='bg-amber-500'/>
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
