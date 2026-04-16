"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartLine } from "react-icons/fa";
import { IoHomeOutline, IoTimerOutline } from "react-icons/io5";
import logo from "@/asset/img/logo.png";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { text: "Home", path: "/", icon: <IoHomeOutline /> },
    { text: "Timeline", path: "/timeline", icon: <IoTimerOutline /> },
    { text: "Status", path: "/status", icon: <FaChartLine /> },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className=" px-2 md:w-[93%] mx-auto flex items-center justify-between py-3 text-[#244D3F]">
        {/* Brand */}
        <Link
          href="/"
          className="text-xl font-semibold text-gray-900 tracking-tight select-none"
        >
          <Image src={logo} alt="Keenkeeper Logo" height={100} width={100} className="mr-2" />
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navItems.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center gap-1.5 px-2 md:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  pathname === link.path
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
