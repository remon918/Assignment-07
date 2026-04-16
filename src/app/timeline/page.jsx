"use client";
import { useState } from "react";
import call from "@/asset/img/call.png";
import Image from "next/image";
import text from "@/asset/img/text.png";
import video from "@/asset/img/video.png";

const methodIcons = {
  Call: <Image src={call} alt="Call Icon" width={25} height={25} />,
  Text: <Image src={text} alt="Text Icon" width={25} height={25} />,
  Video: <Image src={video} alt="Video Icon" width={25} height={25} />,
};

const getEvents = () => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("checkInEvents") || "[]");
};

const TimelinePage = () => {
  const [filter, setFilter] = useState("All");
  const [events] = useState(getEvents);

  const filters = ["All", "Call", "Text", "Video"];
  const filtered =
    filter === "All" ? events : events.filter((e) => e.method === filter);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Timeline</h1>

        <div className="mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-600 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            {filters.map((f) => (
              <option key={f} value={f}>
                {f === "All" ? "Filter timeline" : f}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-3">
          {filtered.length === 0 && (
            <p className="text-gray-400 text-sm text-center py-16">
              No interactions yet. Go check in with a friend!
            </p>
          )}
          {filtered.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-100 rounded-xl px-5 py-4 flex items-center gap-4 shadow-sm"
            >
              <div>{methodIcons[event.method]}</div>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-gray-800">
                  <span className="text-teal-700">{event.method}</span>{" "}
                  <span className="text-gray-400 font-normal text-xs">
                    with
                  </span>{" "}
                  {event.friendName}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;