import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { Authcontex } from '../Provider/Authprovider';
import { Calendar, TrendingUp } from "lucide-react";

const Update = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(Authcontex);

  if (!data || !data.result) {
    return <div className="text-center text-red-600 text-2xl mt-20">No Data Found!</div>;
  }

  const model = data.result; // ✅ important fix

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please login");

    const token = await user.getIdToken();
    const formdata = {
      status: e.target.status.value,
      progress: e.target.progress.value,
    };

    try {
      const res = await fetch(`https://eco-client-server.vercel.app/active/${model._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formdata),
      });
      const result = await res.json();
      if (result.success) {
        alert("Update successfully");
        navigate("/myactivities");
      } else {
        alert("Update failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating data");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Do you want to delete this challenge?")) return;
    if (!user) return alert("Please login first!");

    try {
      const token = await user.getIdToken();
      const res = await fetch(`https://eco-client-server.vercel.app/active/${model._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      if (res.ok && result.success) {
        alert("Challenge deleted successfully!");
        navigate("/allmodels");
      } else {
        alert("Delete failed: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 p-6 justify-center">
      {/* Form */}
      <div className="w-full lg:w-96 bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center 
        mb-8 text-green-700">Update Challenge</h2>
        <form onSubmit={handlesubmit} className="space-y-6">
          <label className="label text-gray-700 font-medium">Progress</label>
          <input type="text" name="progress" defaultValue={model.progress || ""} className="input input-bordered w-full" required />

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Status</label>
            <select name="status" className="select select-bordered w-full" defaultValue={model.status || "pending"} required>
              <option value="pending">Pending</option>
              <option value="ongoing">Ongoing</option>
              <option value="finished">Finished</option>
            </select>
          </div>

        
              <button type="submit" className="btn btn-success btn-lg w-full">Update Challenge</button>
          <button type="button" onClick={handleDelete} 
          className="btn btn-error w-full">Leave challange</button>
        
        </form>
      </div>

      {/* Info */}
      <div className="w-full lg:w-80 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Challenge Info</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-full"><Calendar className="text-green-600 w-5 h-5" /></div>
            <div><p className="text-sm text-gray-500">Duration</p><p className="font-medium text-gray-800">{model.duration} Days</p></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-full"><TrendingUp className="text-green-600 w-5 h-5" /></div>
            <div><p className="text-sm text-gray-500">Impact Metric</p><p className="font-medium text-gray-800 break-all">{model.impactMetric || "N/A"}</p></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-full"><Calendar className="text-green-600 w-5 h-5" /></div>
            <div><p className="text-sm text-gray-500">Joined On</p><p className="font-medium text-gray-800">{new Date(model.joindate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-full"><Calendar className="text-green-600 w-5 h-5" /></div>
            <div><p className="text-sm text-gray-500">Last Updated</p><p className="font-medium text-gray-800">{new Date(model.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
