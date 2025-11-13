import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Authcontex } from '../Provider/Authprovider';

const Details = () => {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Authcontex);
  const { id } = useParams();

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

  // HANDLE JOIN CHALLENGE
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login first!");
      return;
    }

    try {
      // 1️⃣ Increment participants in challenge
      const patchRes = await fetch(`https://eco-client-server.vercel.app/challange/${model._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });
      const patchData = await patchRes.json();
      if (patchData.success) {
        setModel(prev => ({ ...prev, participants: prev.participants + 1 }));
      } else {
        console.log("Failed to increment participants");
      }

      // 2️⃣ Add activity to /active collection
      const formdata = {
        challengeId: id,
        progress: e.target.duration?.value || 0,
        userid: user?.uid,
        status: "not started",
        email: user?.email,
        joindate: new Date(),
      };

      const res = await fetch("https://eco-client-server.vercel.app/active", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if (data.success) {
        alert("Successfully joined the challenge!");
      } else {
        alert("Failed to join the challenge");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  if (loading) return <div className="text-center text-3xl mt-32">Loading...</div>;
  if (!model) return <div className="text-center text-red-600 text-2xl mt-32">No Data Found</div>;

  return (
    <div className="max-w-3xl mx-auto mt-12 bg-gradient-to-b from-green-50 to-white shadow-2xl rounded-3xl p-8 border border-green-100">
  <div className="overflow-hidden rounded-2xl shadow-lg mb-6">
    <img
      src={model.imageUrl}
      alt={model.title}
      className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
    />
  </div>

  <h2 className="text-4xl font-extrabold mb-3 text-green-800 drop-shadow-md">{model.title}</h2>
  <div className="inline-block mb-5 px-4 py-1 rounded-full text-sm font-medium bg-green-600 text-white shadow">{model.category}</div>
  <p className="text-gray-700 mb-6 leading-relaxed">{model.description}</p>

  <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 text-gray-800 mb-8 bg-green-50 p-5 rounded-xl shadow-inner">
    <p><span className="font-semibold">Participants:</span> {model.participants}</p>
    <p><span className="font-semibold">Duration:</span> {model.duration} Days</p>
    <p><span className="font-semibold">Impact:</span> {model.impactMetric}</p>
    <p><span className="font-semibold">Target:</span> {model.target}</p>
  </div>

  <div className="flex justify-between mb-8">
    <Link to="/allmodels" className="btn btn-ghost w-32 border border-green-600 text-green-700 hover:bg-green-100 hover:text-green-800">
      Back
    </Link>
  </div>

  {/* JOIN CHALLENGE FORM */}
  <div className="mt-6">
    <div className="max-w-md mx-auto bg-white shadow-2xl rounded-2xl p-6 border border-green-200">
      <h2 className="text-2xl font-bold mb-5 text-center text-green-700">Join This Challenge</h2>
      <form onSubmit={handlesubmit} className="space-y-4">
        <button
          type="submit"
          className="btn btn-primary w-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Join Challenge
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Details;
