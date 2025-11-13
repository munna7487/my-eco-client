import React, { useEffect, useState } from 'react';
import MyBanner from './MyBanner';
import Active from './Active';
import RecentTips from './RecentTips';
import Upcomeingevent from './Upcomeingevent';
import Green from './Green';
import HowItWorks from './HowItWorks';


const Home = () => {
  const [latest, setLatest] = useState([]);
  const [recent, setrecent] = useState([]);
  const [upcoming, setupcoming] = useState([])
  useEffect(() => {
    fetch('https://eco-client-server.vercel.app/latest')
      .then(res => res.json())
      .then(data => setLatest(data))
  }, []);
  //recent
  useEffect(() => {
    fetch('https://eco-client-server.vercel.app/recent')
      .then(res => res.json())
      .then(data => setrecent(data))
  }, []);
//upcoming 
useEffect(() => {
    fetch('https://eco-client-server.vercel.app/upcoming')
      .then(res => res.json())
      .then(data => setupcoming(data))
  }, []);

  return (
    <div >
      {/* <h1>This is Home</h1> */}
      <MyBanner />
      <div className='max-w-[1260px] mx-auto'>
        <Active data={latest} />
      <div className='my-10'>
        <RecentTips data={recent}></RecentTips>
      </div>
      <div>
        <Upcomeingevent data={upcoming}></Upcomeingevent>

      </div>
      </div>
      <Green></Green>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
