"use client";

import { useRouter } from "next/navigation";

export const metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <h1 className="text-9xl font-black text-gray-100 select-none">404</h1>

      <div className="text-5xl mb-4">📭</div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-400 text-sm text-center max-w-xs mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => router.back()}
          className="px-5 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer"
        >
          ← Go Back
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-5 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition-all duration-200 cursor-pointer"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
