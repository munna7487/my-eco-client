import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Authcontex } from '../Provider/Authprovider';

const Details = () => {
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Authcontex);
  const { id } = useParams();
 const handlesubmit=(e)=>{
  e.preventDefault();

    const startDate = new Date();
    // expire date (endDate) 7 days later — you can change the number if needed
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 7);

    const formdata = {
        
      
      participants: 0,
      duration: e.target.duration.value,
      userid:user._id,

      status: e.target.status.value,

      email:user.email,
      joindate:new Date(),
      

  
    };

    fetch("https://eco-client-server.vercel.app/active", {
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
  
 }
  useEffect(() => {
    fetch(`https://eco-client-server.vercel.app/challange/${id}`)
      .then(res => res.json())
      .then(data => {
        setModel(data.result || data);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Do you want to delete?")) return;
    if (!user) return alert("Pease logoin!");

    const token = await user.getIdToken();
    const res = await fetch(`https://eco-client-server.vercel.app/active`, {
      method: "DELETE",
      headers: { authorization: `Bearer ${token}` }
    });

    if (res.ok) {
      alert("delete done!");
      window.location.href = "/allmodels";
    } else {
      alert("Delete fail");
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
       <div>
         <button>join challange</button>

         {/* akane amr challange form */}

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

    <div>
  <label className="block text-sm font-medium mb-1">Status</label>
  <select name="status" className="select select-bordered w-full" required>
  <option value="">Select status</option>
  <option value="nostandard">No standard</option>
  <option value="ongoing">Ongoing</option>
  <option value="finished">Finished</option>
</select>

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


        <button type="submit" className="btn btn-primary w-full">
          Join Challange
        </button>
      </form>

    </div>
      </div>
       </div>
     
    </div>
  );
};

export default Details;