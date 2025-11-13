import React from 'react';
import Modelcard from './Modelcard';
import { Link } from 'react-router';
import { MdOutlineViewHeadline } from "react-icons/md";

const Active = ({ data }) => {
  return (
    <div className='my-12  md:px-4 lg:px-6'>
      {/* Header */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center my-6 gap-4'>
        <h1>
          <span className='text-3xl sm:text-4xl font-bold'>Active Challenge</span><br />
          <span className='text-xl sm:text-2xl'>Join the movement and make an impact</span>
        </h1>
        <Link to="/allmodels">
          <span className='text-[14px] sm:text-[17px] p-2 border-2 border-blue-700 rounded-xl text-blue-700'>View All</span>
        </Link>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data.map(model => <Modelcard key={model._id} model={model} />)}
      </div>
    </div>
  );
};

export default Active;
