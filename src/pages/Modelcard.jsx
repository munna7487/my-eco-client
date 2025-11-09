import React from 'react';
import { Link } from 'react-router-dom'; // fixed import

const Modelcard = ({ model }) => {
  const { _id } = model; // fixed destructuring
  return (
    <div className="group w-96 bg-base-100 rounded-xl shadow-md border border-base-200 overflow-hidden
                    transition-all duration-300 ease-in-out
                    hover:shadow-xl hover:-translate-y-2">
      
      {/* Image */}
      <figure className="overflow-hidden">
        <img
          src={model?.imageUrl }
        
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </figure>

      {/* Card Body */}
      <div className="p-6">
        {/* Title + NEW Badge */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-base-content">
            {model?.title || "Untitled Model"}
          </h2>
          <div className="badge badge-secondary badge-sm">NEW</div>
        </div>

        {/* Category & Impact */}
        <div className="flex gap-3">
          <div className="badge badge-outline badge-primary">
            {model?.category || "General"}
          </div>
          <div className="badge badge-outline badge-success">
            {model?.impactMetric || "Positive"}
          </div>
        </div>

        <Link to={`/allmodels/${_id}`} className='btn w-full bg-blue-500 my-6 rounded-2xl p-1.5'>
          View details
        </Link>
      </div>
    </div>
  );
};

export default Modelcard;
