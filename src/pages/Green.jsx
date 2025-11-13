import React from 'react';

const Green = () => {
    return (
        <div className='flex bg-[#047857] justify-center items-center'>
            <div className="w-full  text-white p-10  mx-30">
  <h2 className="text-2xl font-bold mb-6 ">Why Go Green?</h2>
  <ul className="space-y-4">
    <li className="flex items-start gap-3">
      <span className="mt-1">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 13l4 4L21 5" />
        </svg>
      </span>
      <div>
        <p className="font-semibold">Combat Climate Change</p>
        <p className="text-sm text-white/90">
          Reduce your carbon footprint and contribute to a healthier planet for future generations.
        </p>
      </div>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-1">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3z M12 14c-4 0-6 2-6 6h12c0-4-2-6-6-6z" />
        </svg>
      </span>
      <div>
        <p className="font-semibold">Preserve Natural Resources</p>
        <p className="text-sm text-white/90">
          Conserve water, energy, and materials for a sustainable tomorrow.
        </p>
      </div>
    </li>

    <li className="flex items-start gap-3">
      <span className="mt-1">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </span>
      <div>
        <p className="font-semibold">Build Community</p>
        <p className="text-sm text-white/90">
          Connect with like-minded individuals making positive environmental impact.
        </p>
      </div>
    </li>
  </ul>
</div>

        </div>
    );
};

export default Green;