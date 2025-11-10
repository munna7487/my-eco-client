import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Authcontex } from '../Provider/Authprovider';

const Details = () => {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Authcontex);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/challange/${id}`)
      .then(res => res.json())
      .then(data => {
        setModel(data.result || data);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("ডিলিট করবেন?")) return;
    if (!user) return alert("লগইন করুন!");

    const token = await user.getIdToken();
    const res = await fetch(`http://localhost:3000/challange/${model._id}`, {
      method: "DELETE",
      headers: { authorization: `Bearer ${token}` }
    });

    if (res.ok) {
      alert("ডিলিট হয়েছে!");
      window.location.href = "/allmodels";
    } else {
      alert("ডিলিট ফেল!");
    }
  };

  if (loading) return <div className="text-center text-3xl mt-32">Loading...</div>;
  if (!model) return <div className="text-center text-red-600 text-2xl mt-32">No Data</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-base-100 shadow-2xl rounded-2xl p-8">
      <img src={model.imageUrl} alt={model.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h2 className="text-3xl font-bold mb-2">{model.title}</h2>
      <div className="badge badge-secondary mb-4">{model.category}</div>
      <p className="text-gray-700 mb-4">{model.description}</p>
      <p><strong>Participants:</strong> {model.participants}</p>
      <p><strong>Duration:</strong> {model.duration}</p>
      <p><strong>impactMetric:</strong> {model.impactMetric}</p>
      <p><strong>Target:</strong> {model.target}</p> 
           <p><strong>startDate:</strong> {model.startDate}</p> 
              <p><strong>EndtDate:</strong> {model.endDate}</p> 
      <div className="mt-8 flex gap-4">
        <Link to={`/update/${model._id}`} className="btn btn-primary">Update</Link>
        <button onClick={handleDelete} className="btn btn-error">Delete</button>
        <Link to="/allmodels" className="btn btn-ghost">Back</Link>
      </div>
    </div>
  );
};

export default Details;