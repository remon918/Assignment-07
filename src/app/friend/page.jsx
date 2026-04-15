"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const statusColor = {
  "On-Track": "bg-green-100 text-green-700",
  "Overdue": "bg-red-100 text-red-600",
  "Almost Due": "bg-yellow-100 text-yellow-700",
  "Family": "bg-purple-100 text-purple-700",
  "Work": "bg-blue-100 text-blue-700",
  "Hobby": "bg-orange-100 text-orange-700",
  "Travel": "bg-teal-100 text-teal-700",
};

const Friend = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Your Friends
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <Link
              key={friend.id}
              href={`/friend/${friend.id}`}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center gap-2 hover:shadow-md transition cursor-pointer"
            >
              <Image
                src={friend.avatar}
                alt={friend.name}
                height={64}
                width={64}
                className=" rounded-full object-cover"
              />

              <h3 className="text-sm font-semibold text-gray-900">
                {friend.name}
              </h3>

              <p className="text-xs text-gray-400">
                {friend.lastContact}
              </p>

              <div className="flex flex-wrap justify-center gap-1 mt-1">
                {friend.tags?.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 text-xs font-medium rounded-full ${statusColor[tag]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span
                className={`mt-2 px-3 py-0.5 text-xs font-semibold rounded-full ${statusColor[friend.status]}`}
              >
                {friend.status}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friend;