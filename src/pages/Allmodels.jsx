import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modelcard from './Modelcard';

const Allmodels = () => {
  const data = useLoaderData() || []; // যদি কোনো ডাটা না আসে তাহলে empty array

  return (
    <div className="px-6 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">All Models</h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-500">No models found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {data.map((model) => (
            <Modelcard key={model._id} model={model} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Allmodels;