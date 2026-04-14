import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#295c4a] text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-6">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold">KeenKeeper</h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-200 max-w-md">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black text-sm cursor-pointer">
            G
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black text-sm cursor-pointer">
            f
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black text-sm cursor-pointer">
            X
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mt-6 text-xs text-gray-300">
          
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4">
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span className="cursor-pointer hover:underline">Terms of Service</span>
            <span className="cursor-pointer hover:underline">Cookies</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;