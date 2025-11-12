import React from "react";
import { Users, Leaf, Droplets } from "lucide-react"; // 👈 Add this line

const Subbanner = () => {
  return (
    <div>
      <section className="bg-[#047857] text-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Our Community Impact
          </h2>
          <p className="text-gray-100 mb-12">
            Together, we're making a real difference
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Active Participants */}
            <div>
              <div className="bg-white/20 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold">1,024</h3>
              <p className="text-gray-100">Active Participants</p>
            </div>

            {/* CO₂ Emissions Saved */}
            <div>
              <div className="bg-white/20 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold">12,800 kg</h3>
              <p className="text-gray-100">CO₂ Emissions Saved</p>
            </div>

            {/* Plastic Waste Reduced */}
            <div>
              <div className="bg-white/20 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold">8,499 kg</h3>
              <p className="text-gray-100">Plastic Waste Reduced</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subbanner;
