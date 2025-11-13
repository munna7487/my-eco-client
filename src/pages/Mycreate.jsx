import React, { useContext, useEffect, useState } from "react";
import { Authcontex } from "../Provider/Authprovider";
import Swal from "sweetalert2";

const Mycreate = () => {
  const { user } = useContext(Authcontex);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null); // for modal form

  // 🔹 Fetch user's created challenges
  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    const fetchActivities = async () => {
      try {
        const res = await fetch("https://eco-client-server.vercel.app/challange");
        const data = await res.json();

        // ✅ এখানে শুধু নিজের email অনুযায়ী ফিল্টার করা হচ্ছে
        const myChallenges = data.filter(
          (item) => item.email === user.email
        );

        setActivities(myChallenges);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [user?.email]);

  // 🔹 Delete challenge
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this challenge!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#059669",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      const token = await user.getIdToken();
      const res = await fetch(
        `https://eco-client-server.vercel.app/challange/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (data.success) {
        Swal.fire("Deleted!", "Your challenge has been removed.", "success");
        setActivities(activities.filter((a) => a._id !== id));
      } else {
        Swal.fire("Error!", data.message || "Something went wrong.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", error.message, "error");
    }
  };

  // 🔹 Handle update submit
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      duration: form.duration.value,
      target: form.target.value,
      impactMetric: form.impactMetric.value,
      imageUrl: form.imageUrl.value,
      startDate: form.startDate.value,
      endDate: form.endDate.value,
      email: user.email,
    };

    try {
      const token = await user.getIdToken();
      const res = await fetch(
        `https://eco-client-server.vercel.app/challange/${editing._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      const data = await res.json();
      if (data.success) {
        Swal.fire("Updated!", "Challenge updated successfully.", "success");
        setEditing(null);
        setActivities((prev) =>
          prev.map((a) =>
            a._id === editing._id ? { ...a, ...updatedData } : a
          )
        );
      } else {
        Swal.fire("Error!", "Failed to update challenge.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", error.message, "error");
    }
  };

  // 🔹 Loading & error states
  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600"></div>
      </div>
    );

  if (error)
    return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <div className="max-w-[1260px] mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-green-700">
        My Created Challenges
      </h1>

      {activities.length === 0 ? (
        <p className="text-center text-gray-600">No challenges found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {activities.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-200"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-green-700 mb-1">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm mb-1">
                  <strong>Category:</strong> {item.category}
                </p>
                <p className="text-gray-500 text-sm mb-2">
                  <strong>Start:</strong>{" "}
                  {new Date(item.startDate).toLocaleDateString()}
                </p>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setEditing(item)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => setEditing(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold text-center text-green-700 mb-4">
              Update Challenge
            </h2>

            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                type="text"
                name="title"
                defaultValue={editing.title}
                className="w-full border p-2 rounded"
                placeholder="Title"
              />
              <input
                type="text"
                name="category"
                defaultValue={editing.category}
                className="w-full border p-2 rounded"
                placeholder="Category"
              />
              <input
                type="text"
                name="duration"
                defaultValue={editing.duration}
                className="w-full border p-2 rounded"
                placeholder="Duration"
              />
              <input
                type="text"
                name="target"
                defaultValue={editing.target}
                className="w-full border p-2 rounded"
                placeholder="Target"
              />
              <input
                type="text"
                name="impactMetric"
                defaultValue={editing.impactMetric}
                className="w-full border p-2 rounded"
                placeholder="Impact Metric"
              />
              <input
                type="url"
                name="imageUrl"
                defaultValue={editing.imageUrl}
                className="w-full border p-2 rounded"
                placeholder="Image URL"
              />
              <textarea
                name="description"
                defaultValue={editing.description}
                className="w-full border p-2 rounded"
                placeholder="Description"
              ></textarea>
              <div className="flex gap-2">
                <input
                  type="date"
                  name="startDate"
                  defaultValue={editing.startDate?.split("T")[0]}
                  className="w-1/2 border p-2 rounded"
                />
                <input
                  type="date"
                  name="endDate"
                  defaultValue={editing.endDate?.split("T")[0]}
                  className="w-1/2 border p-2 rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mycreate;
