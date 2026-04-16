import React from "react";

const Banner = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center flex flex-col items-center gap-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>
        <p className="text-sm md:text-base text-gray-500 max-w-xl">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="mt-4 px-5 py-2 bg-[#295c4a] text-white text-sm font-semibold rounded-lg hover:bg-[#193c31] cursor-pointer transition-all duration-200">
          + Add a Friend
        </button>
      </div>
    </section>
  );
};

export default Banner;
