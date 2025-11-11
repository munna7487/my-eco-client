import React from 'react';
import { Link } from 'react-router-dom';

const Modelcard = ({ model }) => {
  // যদি model না থাকে → কিছু দেখাবে না
  if (!model) {
    console.warn('Modelcard: model is missing');
    return null;
  }

  // Safe destructuring: যদি _id না থাকে, fallback দাও
  const _id = model._id || model.id || 'unknown';

  return (
    <div className="group w-96 bg-base-100 rounded-xl shadow-md border border-base-200 overflow-hidden
                    transition-all duration-300 ease-in-out
                    hover:shadow-xl hover:-translate-y-2">
      
      {/* Image */}
      <figure className="overflow-hidden">
        <img
          src={model.imageUrl || '/placeholder.jpg'} // fallback image
          alt={model.title || 'Model'}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = '/placeholder.jpg'; // যদি ছবি না লোড হয়
          }}
        />
      </figure>

      {/* Card Body */}
      <div className="p-6">
        {/* Title + NEW Badge */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-base-content">
            {model.title || "Untitled Model"}
          </h2>
          <div className="badge badge-secondary badge-sm">NEW</div>
        </div>

        {/* Category & Impact */}
        <div className="flex gap-3 mb-4">
          <div className="badge badge-outline badge-primary">
            {model.category || "General"}
          </div>
          <div className="badge badge-outline badge-success">
            {model.impactMetric || "Positive"}
          </div>
        </div>

        {/* View Details Button */}
        <Link
          to={`/allmodels/${_id}`}
          className="btn w-full bg-blue-500 hover:bg-blue-600 text-white my-6 rounded-2xl p-1.5 transition-colors"
        >
          View details
        </Link>
      </div>
    </div>
  );
};

export default Modelcard;