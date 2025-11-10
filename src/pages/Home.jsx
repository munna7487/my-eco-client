import React, { useEffect, useState } from 'react';
import MyBanner from './MyBanner';
import Active from './Active';

const Home = () => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/latest')
      .then(res => res.json())
      .then(data => setLatest(data))
  }, []);

  return (
    <div>
      <h1>This is Home</h1>
      <MyBanner />
      <Active data={latest} />
    </div>
  );
};

export default Home;
