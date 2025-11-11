import React, { useContext } from 'react';
import { Authcontex } from '../Provider/Authprovider';
import { Link, Links } from 'react-router';

const ADD = () => {
  const { user } = useContext(Authcontex);

  const handlesubmit = (e) => {
    e.preventDefault();

    const startDate = new Date();
    // expire date (endDate) 7 days later — you can change the number if needed
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 7);

    const formdata = {
      title: e.target.title.value,
      category: e.target.category.value,
      participants: 0,
      duration: e.target.duration.value,
      description: e.target.description.value,
      imageUrl: e.target.image.value,
      target: e.target.target.value,
      impactMetric: e.target.impactMetric.value,
      startDate,
      endDate,

      createdBy: user?.email,
    };

    fetch("https://eco-client-server.vercel.app/challange", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
      <div>
<div className="w-full bg-teal-600 py-16 px-6 rounded-xl">
  <div className="max-w-4xl mx-auto">
    <Link to="/allmodels" className="flex items-center gap-2 text-white mb-6 hover:opacity-90 transition">
      <span className="text-xl">←</span>
      <span className="text-lg">Back to Challenges</span>
    </Link>

    <h1 className="text-4xl font-bold text-white">
      Create New Challenge
    </h1>

    <p className="text-white text-lg mt-2">
      Inspire others by creating a new sustainability challenge
    </p>
  </div>
</div>

    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Card</h2>
      <form onSubmit={handlesubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            className="input input-bordered w-full"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            className="input input-bordered w-full"
          />
        </div>
        {/* target */}
        <div>
          <label className="block text-sm font-medium mb-1">Target</label>
          <input
            type="text"
            name="target"
            placeholder="Target"
            className="input input-bordered w-full"
          />
        </div>
        {/* impactMetric */}
        <div>
          <label className="block text-sm font-medium mb-1">impactMetric</label>
          <input
            type="text"
            name="impactMetric"
            placeholder="impactMetric"
            className="input input-bordered w-full"
          />
        </div>


        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Short Description
          </label>
          <textarea
            name="description"
            rows="3"
            placeholder="Enter short description"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium mb-1">Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="Enter duration"
            className="input input-bordered w-full"
          />
        </div>

        {/* Participants */}
        <div>
          <label className="block text-sm font-medium mb-1">Participants</label>
          <input
            type="number"
            name="participants"
            placeholder="Enter number of participants"
            className="input input-bordered w-full"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="Enter image URL"
            className="input input-bordered w-full"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>

    </div>
      </div>
  );
};

export default ADD;
