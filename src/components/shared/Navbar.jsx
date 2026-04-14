"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartLine } from "react-icons/fa";
import { IoHomeOutline, IoTimerOutline } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { text: "Home", path: "/home", icon: <IoHomeOutline /> },
    { text: "Timeline", path: "/timeline", icon: <IoTimerOutline /> },
    { text: "Status", path: "/status", icon: <FaChartLine /> },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold text-gray-900 tracking-tight select-none"
        >
          <span className="font-black">Keen</span>Keeper
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navItems.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  pathname === link.path ||
                  (pathname === "/" && link.path === "/home")
                    ? "bg-teal-800 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              <span className="text-xs">{link.icon}</span>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
