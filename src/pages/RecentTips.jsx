import React from 'react';

const RecentTips = ({ data }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center">Recent Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((model) => (
          <div
            key={model._id}
            className="w-96 bg-gray-950 border border-gray-800 rounded-2xl shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01]"
          >
            <div className="card-body p-6 space-y-4">
              {/* Title */}
              <h2 className="text-2xl font-semibold text-white tracking-wide flex items-center justify-between">
                {model.title || 'Untitled'}
                {/* <div className="badge bg-indigo-600 text-white text-xs px-2 py-1 rounded-md">NEW</div> */}
              </h2>

              {/* Author */}
              <p className="text-green-400 text-sm italic">
                {model.authorName ||
                  'A card component has a figure, a body part, and inside body there are title and actions parts.'}
              </p>

              {/* Content */}
              <p className="text-gray-300 text-base leading-relaxed">
                {model.content}
              </p>

              {/* Category */}
              <p className="text-indigo-400 font-medium text-sm uppercase tracking-wide">
                {model.category}
              </p>

              {/* Footer badges */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                <div className="px-3 py-1 rounded-full text-xs border border-indigo-500 text-indigo-300 bg-indigo-500/10">
                  {model.upvotes || 'General'}
                </div>
                <div className="px-3 py-1 rounded-full text-xs border border-gray-600 text-gray-400 bg-gray-700/30">
                  {model.createdAt || 'Unknown'}
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
