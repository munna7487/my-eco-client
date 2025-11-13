import React, { useEffect, useState } from 'react';
import Modelcard from './Modelcard';

const Search = () => {
  const [recent, setRecent] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('https://eco-client-server.vercel.app/challange');
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();

      if (!Array.isArray(data)) throw new Error('Invalid data format');

      console.log('Fetched Data:', data);
      setRecent(data);
    } catch (err) {
      console.error('Fetch failed:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (recent.length === 0) fetchData();
  }, [recent.length]);

  // Filter: trim + case-insensitive
  const filteredData = selectedCategory
    ? recent.filter(item => {
        const itemCat = (item.category || '').trim().toLowerCase();
        const selCat = selectedCategory.trim().toLowerCase();
        return itemCat === selCat;
      })
    : recent;

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Search Challenges
      </h1>

      {/* Category Dropdown */}
      <div className="mb-6 max-w-xs">
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select select-bordered w-full"
          disabled={loading}
        >
          <option value="">All Categories</option>
          <option value="Energy Conservation">Energy Conservation</option>
          <option value="Water Conservation">Water Conservation</option>
          <option value="Sustainable Transport">Sustainable Transport</option>
          <option value="Green Living">Green Living</option>
        </select>
      </div>

      {/* Loading & Error */}
      {loading && <p className="text-blue-600 mb-4">Loading challenges...</p>}
      {error && (
        <div className="text-red-600 mb-4">
          <p>Error: {error}</p>
          <button onClick={fetchData} className="btn btn-sm btn-error mt-2">
            Retry
          </button>
        </div>
      )}

      {/* Cards */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.length > 0 ? (
            filteredData.map((data) => (
              data && data._id ? <Modelcard key={data._id} model={data} /> : null
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No challenges found in this category.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
