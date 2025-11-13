import React from 'react';

const RecentTips = ({ data }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Recent Tips
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((model) => (
          <div
            key={model._id}
            className="w-96 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01]"
          >
            <div className="card-body p-6 space-y-4">
              {/* Title */}
              <h2 className="text-2xl font-semibold text-gray-800 tracking-wide flex items-center justify-between">
                {model.title || 'Untitled'}
              </h2>

              {/* Author */}
              <p className="text-green-700 text-sm italic">
                {model.authorName ||
                  'A card component has a figure, a body part, and inside body there are title and actions parts.'}
              </p>

              {/* Content */}
              <p className="text-gray-700 text-base leading-relaxed">
                {model.content}
              </p>

              {/* Category */}
              <p className="text-indigo-600 font-medium text-sm uppercase tracking-wide">
                {model.category}
              </p>

              {/* Footer badges */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div className="px-3 py-1 rounded-full text-xs border border-indigo-400 text-indigo-600 bg-indigo-50">
                  {model.upvotes || 'General'}
                </div>
                <div className="px-3 py-1 rounded-full text-xs border border-gray-300 text-gray-600 bg-gray-100">
                  {model.createdAt
                    ? new Date(model.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Unknown"}
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
