import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modelcard from './Modelcard';
import { Link } from 'react-router';
import Search from './Search';

const Allmodels = () => {
  const data = useLoaderData() || []; 

  return (
    <div>
      {/* Create Challenge Section */}
      <div className="w-full bg-teal-600 py-12 md:py-16 px-4 sm:px-6 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Browse Challenges
          </h1>
          <p className="text-white text-base sm:text-lg mt-2">
            Find the perfect sustainability challenge for your goals
          </p>
        </div>
        <Link
          to="/add"
          className='flex items-center gap-2 bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg hover:bg-gray-800 transition'
        >
          <span className="text-xl">+</span> Create Challenge
        </Link>
      </div>

      {/* Search & Models Section */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-6">
        <Search />

        {/* <h1 className="text-2xl sm:text-3xl font-bold text-center my-6">All Models</h1> */}

        {/* {data.length === 0 ? (
          <p className="text-center text-gray-500">No models found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {data.map((model) => (
              <Modelcard key={model._id} model={model} />
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Allmodels;
