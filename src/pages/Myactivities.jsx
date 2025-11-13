import React, { useEffect, useState, useContext } from 'react';
import { Authcontex } from '../Provider/Authprovider';
import { Link } from 'react-router-dom';

const Myactivities = () => {
  const { user } = useContext(Authcontex);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    const fetchActivities = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://eco-client-server.vercel.app/active?email=${user.email}`
        );

        if (!res.ok) throw new Error('Failed to fetch activities');

        const data = await res.json();
        setActivities(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [user?.email]);

  const completed = activities.filter((a) => a.status === 'finished').length;
  const ongoing = activities.filter((a) => a.status === 'ongoing').length;
  const pending = activities.filter((a) => a.status === 'pending').length;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-600">Error: {error}</p>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg text-center">
          <p className="text-gray-600 text-sm">Total Joined</p>
          <p className="text-3xl font-bold text-blue-700">{activities.length}</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl shadow-lg text-center">
          <p className="text-gray-600 text-sm">Completed</p>
          <p className="text-3xl font-bold text-green-700">{completed}</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl shadow-lg text-center">
          <p className="text-gray-600 text-sm">Ongoing</p>
          <p className="text-3xl font-bold text-yellow-700">{ongoing}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl shadow-lg text-center">
          <p className="text-gray-600 text-sm">Pending</p>
          <p className="text-3xl font-bold text-orange-700">{pending}</p>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        My Activities
      </h1>

      {activities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title || 'Untitled Challenge'}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Email:</span> {item.email}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Duration:</span> {item.duration} days
              </p>
              <p className="text-sm mb-1">
                <span className="font-medium">Status:</span>{' '}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === 'finished'
                      ? 'bg-green-100 text-green-800'
                      : item.status === 'ongoing'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}
                >
                  {item.status}
                </span>
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-medium">Joined:</span>{' '}
                {new Date(item.joindate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>

              {/* ✅ Fixed Update Button */}
              <Link
                to={`/update/${item._id}`}
                className="block w-full text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                Update Challenge
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="bg-gray-100 border-2 border-dashed rounded-xl w-32 h-32 mx-auto mb-6 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-xl text-gray-600">No activities found.</p>
          <p className="text-sm text-gray-500 mt-2">
            Join a challenge to see it here!
          </p>
        </div>
      )}
    </div>
  );
};

export default Myactivities;
