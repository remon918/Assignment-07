import Image from "next/image";
import React from "react";
import ig from "@/asset/img/instagram.png";
import twitter from "@/asset/img/twitter.png";
import facebook from "@/asset/img/facebook.png";

const Footer = () => {
  return (
    <footer className="bg-[#295c4a] text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-6">
        <h1 className="text-3xl md:text-4xl font-bold">KeenKeeper</h1>

        <p className="text-sm text-gray-200 max-w-md">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="flex items-center gap-4">
          <Image
            src={ig}
            alt="Instagram"
            width={32}
            height={32}
            className="cursor-pointer"
          />

          <Image
            src={twitter}
            alt="Twitter"
            width={32}
            height={32}
            className="cursor-pointer"
          />

          <Image
            src={facebook}
            alt="Facebook"
            width={32}
            height={32}
            className="cursor-pointer"
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 mt-6 text-xs text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4">
            <span className="cursor-pointer hover:underline">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:underline">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:underline">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
