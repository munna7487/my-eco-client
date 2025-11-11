import React, { useEffect, useState, useContext } from 'react';
import { Authcontex } from '../Provider/Authprovider';

const Myactivities = () => {
  const { user } = useContext(Authcontex); // ✅ useContext এখানে
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    if (user?.email) { // ✅ optional chaining
      console.log("Logged in user:", user.email);

      fetch(`https://eco-client-server.vercel.app/active?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setUpcoming(data))
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [user?.email]); // ✅ dependency ঠিক করা হলো

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">My Activities</h1>

      {upcoming.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcoming.map((item, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Duration:</strong> {item.duration}</p>
              <p><strong>Status:</strong> {item.status}</p>
              <p><strong>Joined:</strong> {new Date(item.joindate).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No activities found.</p>
      )}
    </div>
  );
};

export default Myactivities;
