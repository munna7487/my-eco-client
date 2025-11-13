import React from 'react';

const Upcomeingevent = ({data}) => {
    return (
      <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center">upcoming Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((model) => (
          <div
  key={model._id}
  className="w-96 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01]"
>
  <div className="card-body p-6 space-y-4">
    {/* Title */}
    <h2 className="text-xl font-semibold text-gray-900 tracking-wide flex items-center justify-between">
      {model.title || 'Untitled'}
      {/* <div className="badge bg-indigo-500 text-white text-xs px-2 py-1 rounded-md">NEW</div> */}
    </h2>

    {/* Description */}
    <p className="text-gray-600 text-sm leading-relaxed">
      {model.description ||
        'A card component has a figure, a body part, and inside body there are title and actions parts.'}
    </p>

    {/* Organizer */}
    <p className="text-indigo-600 font-medium text-sm">
      {model.organizer}
    </p>

    {/* Participants Info */}
    <div className="flex justify-between text-gray-700 text-sm">
      <p>Max: <span className="font-semibold text-gray-900">{model.maxParticipants}</span></p>
      <p>Current: <span className="font-semibold text-gray-900">{model.currentParticipants}</span></p>
    </div>

    {/* Footer */}
    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
      <div className="px-3 py-1 rounded-full text-xs border border-indigo-300 text-indigo-600 bg-indigo-50 font-medium">
        {model.location || 'General'}
      </div>
      <div className="px-3 py-1 rounded-full text-xs border border-gray-300 text-gray-600 bg-gray-100 font-medium">
  {model.date
    ? new Date(model.date).toLocaleDateString("en-US", {
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

export default Upcomeingevent;