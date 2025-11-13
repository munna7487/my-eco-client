import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Authcontex } from '../Provider/Authprovider';

const Details = () => {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Authcontex);
  const { id } = useParams();
  const navigate = useNavigate();

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
      navigate("/login");
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

  if (loading) return <div className="text-center text-3xl mt-32 font-semibold text-green-700 animate-pulse">Loading...</div>;
  if (!model) return <div className="text-center text-red-600 text-2xl mt-32 font-bold">No Data Found</div>;

  return (
    <div className="max-w-4xl mx-auto mt-14 p-8 bg-gradient-to-b from-green-50 to-white rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-green-100 transition-all duration-500 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
      
      {/* IMAGE SECTION */}
      <div className="overflow-hidden rounded-3xl shadow-lg mb-8">
        <img
          src={model.imageUrl}
          alt={model.title}
          className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* TITLE & CATEGORY */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold mb-3 text-green-800 tracking-wide drop-shadow-sm">
          {model.title}
        </h2>
        <div className="inline-block mb-5 px-5 py-1.5 rounded-full text-sm font-semibold bg-green-600 text-white shadow-md uppercase">
          {model.category}
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-gray-700 mb-8 leading-relaxed text-lg text-center max-w-2xl mx-auto">
        {model.description}
      </p>

      {/* STATS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 bg-green-50 p-6 rounded-2xl shadow-inner mb-10">
        <p className="text-gray-800"><span className="font-semibold text-green-700">Participants:</span> {model.participants}</p>
        <p className="text-gray-800"><span className="font-semibold text-green-700">Duration:</span> {model.duration} Days</p>
        <p className="text-gray-800"><span className="font-semibold text-green-700">Impact:</span> {model.impactMetric}</p>
        <p className="text-gray-800"><span className="font-semibold text-green-700">Target:</span> {model.target}</p>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center mb-8">
        <Link
          to="/allmodels"
          className="w-40 text-center py-2 border border-green-600 text-green-700 rounded-full font-semibold hover:bg-green-100 transition-all duration-300 hover:shadow-md"
        >
          Back
        </Link>
      </div>

      {/* JOIN CARD */}
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8 border border-green-200 hover:shadow-2xl transition-all duration-500">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Want to Join This Challenge?
        </h2>
        <form onSubmit={handlesubmit} className="space-y-4">
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            Join Challenge
          </button>
        </form>
      </div>
    </div>
  );
};

export default Details;
