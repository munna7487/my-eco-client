import React from 'react';

const RecentTips = ({ data }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center">Recent Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((model) => (
          <div key={model._id} className="card bg-base-100 w-96 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">
                {model.title || 'Untitled'}
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h2>
              <p>
                {model.authorName ||
                  'A card component has a figure, a body part, and inside body there are title and actions parts.'}
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  {model.upvotes || 'General'}
                </div>
                <div className="badge badge-outline">
                  {model.createdAt
                          || 'Unknown'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTips;
