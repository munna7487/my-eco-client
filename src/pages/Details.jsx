import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Authcontex } from '../Provider/Authprovider';

const Details = () => {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Authcontex);
  const { id } = useParams();
  //akhne new +++

  const [count, setCount] = useState(0);

const handleJoin = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`https://eco-client-server.vercel.app/challange/${model._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.success) {
      setModel(prev => ({ ...prev, participants: prev.participants + 1 }));
      alert("Participants updated successfully!");
    } else {
      alert("Update failed");
    }
  } catch (err) {
    console.error(err);
    alert("Error updating participants");
  }
};


  // JOIN CHALLENGE FORM
  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login first!");
      return;
    }

    const formdata = {
      challengeId: id,
      progress: e.target.duration.value,
      userid: user?.uid,
      status: e.target.status.value,
      email: user?.email,
      joindate: new Date(),
    };

    try {
      const res = await fetch("https://eco-client-server.vercel.app/active", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      console.log("Joined:", data);
      alert("Successfully joined the challenge!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to join");
    }
  };

  // FETCH MODEL
  useEffect(() => {
    fetch(`https://eco-client-server.vercel.app/challange/${id}`)
      .then(res => res.json())
      .then(data => {
        setModel(data.result || data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  // ✅ DELETE FUNCTION (fixed token header)
  // const handleDelete = async () => {
  //   if (!window.confirm("Do you want to delete this challenge?")) return;
  //   if (!user) return alert("Please login first!");

  //   try {
  //     const token = await user.getIdToken();
  //     const res = await fetch(`https://eco-client-server.vercel.app/challange/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         authorization: `Bearer ${token}`,
  //       },
  //     });

  //     const result = await res.json();
  //     if (res.ok && result.success) {
  //       alert("Challenge deleted successfully!");
  //       window.location.href = "/allmodels";
  //     } else {
  //       alert("Delete failed: " + (result.message || "Unknown error"));
  //     }
  //   } catch (error) {
  //     console.error("Delete error:", error);
  //     alert("Error: " + error.message);
  //   }
  // };

  if (loading) return <div className="text-center text-3xl mt-32">Loading...</div>;
  if (!model) return <div className="text-center text-red-600 text-2xl mt-32">No Data Found</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-base-100 shadow-2xl rounded-2xl p-8">
      <img src={model.imageUrl} alt={model.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h2 className="text-3xl font-bold mb-2">{model.title}</h2>
      <div className="badge badge-secondary mb-4">{model.category}</div>
      <p className="text-gray-700 mb-4">{model.description}</p>
      <p><strong>Participants:</strong> {model.participants}</p>
      <p><strong>Duration:</strong> {model.duration}</p>
      <p><strong>Impact:</strong> {model.impactMetric}</p>
      <p><strong>Target:</strong> {model.target}</p>

      <div className="mt-8 flex gap-4">
        {/* <Link to={`/update/${model._id}`} className="btn btn-primary">Update</Link> */}
        {/* <button onClick={handleDelete} className="btn btn-error">Delete</button> */}
        <Link to="/allmodels" className="btn btn-ghost">Back</Link>
      </div>

      {/* JOIN CHALLENGE FORM */}
      <div className="mt-10">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Join This Challenge</h2>
          <form onSubmit={handlesubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="text" value={user?.email || ""} readOnly className="input input-bordered w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select name="status" className="select select-bordered w-full" required>
                <option value="">Select status</option>
                <option value="Not started">Not started</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Finished">Finished</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Progress</label>
              <input type="number" name="duration" placeholder="7" className="input input-bordered w-full" required />
            </div>
            {/* ami akhane join button add krchi jata ta click krle increse hobe  */}
            <button onClick={handleJoin} type="submit" className="btn btn-primary w-full">
              Confirm Join
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Details;
