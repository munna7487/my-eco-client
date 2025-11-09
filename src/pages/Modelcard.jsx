import React from 'react';

const Modelcard = ({ model }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={model?.imageUrl 
}
          className="h-56 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {model?.title || "Card Title"}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{model?.description || "No description available"}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            {model?.category || "Category"}
          </div>
          <div className="badge badge-outline">
            {model?.impactMetric || "Impact"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modelcard;