import React, { useContext } from 'react';
import { Authcontex } from '../Provider/Authprovider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ADD = () => {
  const { user } = useContext(Authcontex);

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!user) return toast.error("You must be logged in to add a challenge");

    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 7);

    const formdata = {
      title: e.target.title.value,
      category: e.target.status.value,
      participants: 0,
      duration: e.target.duration.value,
      description: e.target.description.value,
      imageUrl: e.target.image.value,
      target: e.target.target.value,
      impactMetric: e.target.impactMetric.value,
      email: user.email,
      startDate,
      endDate,
      createdBy: user.email,
    };

    try {
      // Get Firebase token for authentication
      const token = await user.getIdToken();

      const res = await fetch(`https://eco-client-server.vercel.app/challange`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // <--- middleware checks this
        },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Challenge added successfully!");
        e.target.reset();
      } else {
        toast.error("Failed to add challenge");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <div className="w-full bg-teal-600 py-16 px-6 rounded-xl">
        <div className="max-w-4xl mx-auto">
          <Link to="/allmodels" className="flex items-center gap-2 text-white mb-6 hover:opacity-90 transition">
            <span className="text-xl">←</span>
            <span className="text-lg">Back to Challenges</span>
          </Link>

          <h1 className="text-4xl font-bold text-white">Create New Challenge</h1>
          <p className="text-white text-lg mt-2">Inspire others by creating a new sustainability challenge</p>
        </div>
      </div>

      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 my-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Create A Challenge</h2>
        <form onSubmit={handlesubmit} className="space-y-4">

          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input type="text" name="title" placeholder="Enter title" className="input input-bordered w-full" required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select name="status" className="select select-bordered w-full" required>
              <option value="Energy Conservation">Energy Conservation</option>
              <option value="Water Conservation">Water Conservation</option>
              <option value="Sustainable Transport">Sustainable Transport</option>
              <option value="Green Living">Green Living</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Target</label>
            <input type="text" name="target" placeholder="Target" className="input input-bordered w-full" required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Impact Metric</label>
            <input type="text" name="impactMetric" placeholder="Impact Metric" className="input input-bordered w-full" required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Short Description</label>
            <textarea name="description" rows="3" placeholder="Enter short description" className="textarea textarea-bordered w-full" required></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Duration</label>
            <input type="text" name="duration" placeholder="Enter duration" className="input input-bordered w-full" required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input type="url" name="image" placeholder="Enter image URL" className="input input-bordered w-full" />
          </div>

          <button type="submit" className="btn btn-primary w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ADD;
