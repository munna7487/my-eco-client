import React from 'react';
import errorImg from "../assets/404.png"; // ✅ renamed import variable

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Page Not Found</h1>
      <img
        src={errorImg}
        alt="404 Error"
        className="w-80 h-auto"
      />
    </div>
  );
};

export default Errorpage;
