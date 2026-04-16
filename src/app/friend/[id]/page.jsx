"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import allFriendsData from "@/../public/data.json";
import { PiBellSimpleZ, PiPhoneCallBold } from "react-icons/pi";
import { IoTrashBinOutline, IoVideocamOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
import { toast } from "react-toastify";

const statusColorMap = {
  "On-Track": { bg: "bg-teal-100", text: "text-white" },
  Overdue: { bg: "bg-red-500", text: "text-white" },
  "Almost Due": { bg: "bg-yellow-100", text: "text-yellow-700" },
  FAMILY: { bg: "bg-green-100", text: "text-green-700" },
  default: { bg: "bg-gray-100", text: "text-gray-700" },
};

const contactMethods = [
  { id: "call", label: "Call", icon: () => <PiPhoneCallBold size={24} /> },
  { id: "text", label: "Text", icon: () => <BiMessageDots size={26} /> },
  { id: "video", label: "Video", icon: () => <IoVideocamOutline size={29} /> },
];

const FriendDetails = ({ params }) => {
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resolvedParams = await params;
      const idStr = resolvedParams.id;
      const friendData = allFriendsData.find((f) => f.id === parseInt(idStr));
      setFriend(friendData);
      setLoading(false);
    };
    fetchData();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-500 animate-pulse">
          Loading friend details...
        </div>
      </div>
    );
  }

  if (!friend) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-3xl font-bold text-gray-800 p-10 bg-white shadow rounded-2xl">
          User Not Found
        </div>
      </div>
    );
  }

  const handleQuickCheckIn = (actionLabel, friendName) => {
    if (
      actionLabel === "Call" ||
      actionLabel === "Video" ||
      actionLabel === "Text"
    ) {
      if (typeof window !== "undefined") {
        const existing = JSON.parse(
          localStorage.getItem("checkInEvents") || "[]",
        );
        const newEvent = {
          id: crypto.randomUUID(),
          friendName,
          method: actionLabel,
          date: new Date().toISOString(),
        };
        localStorage.setItem(
          "checkInEvents",
          JSON.stringify([newEvent, ...existing]),
        );
      }

      if (actionLabel === "Call" || actionLabel === "Video") {
        toast(
          `You are interacting with ${friendName} via ongoing ${actionLabel}!`,
        );
      } else {
        toast(`You and ${friendName} are in text conversation!`);
      }
    }
  };
  const mainStatus = statusColorMap[friend.status] || statusColorMap["default"];
  const familyTag = statusColorMap["FAMILY"];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center gap-4">
            <Image
              src={friend.avatar}
              alt={friend.name}
              height={100}
              width={100}
              className="rounded-full object-cover border-4 border-gray-100"
            />

            <h1 className="text-2xl font-semibold text-gray-900">
              {friend.name}
            </h1>

            <div className="flex flex-col items-center gap-1.5">
              <span
                className={`px-4 py-0.5 text-xs font-semibold rounded-full ${mainStatus.bg} ${mainStatus.text}`}
              >
                {friend.status.toUpperCase()}
              </span>

              {friend.tags?.includes("Family") && (
                <span
                  className={`px-4 py-0.5 text-xs font-semibold rounded-full ${familyTag.bg} ${familyTag.text}`}
                >
                  FAMILY
                </span>
              )}
            </div>
            <div className="space-y-1.5 mt-1">
              <p className="text-sm font-medium italic text-gray-600 px-4">
                “{friend.friendIdentity || "No note available"}”
              </p>
              <p className="text-xs text-gray-400">
                Preferred: {friend.preferredContact || "Not set"}
              </p>
            </div>
            <div className="w-full space-y-2 mt-4">
              <button className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-100 hover:bg-gray-100 py-3 rounded-lg text-sm font-semibold text-gray-800 transition cursor-pointer">
                <PiBellSimpleZ />
                Snooze 2 Weeks
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-100 hover:bg-gray-100 py-3 rounded-lg text-sm font-semibold text-gray-800 transition cursor-pointer">
                <IoTrashBinOutline />
                Archive
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-red-50 py-3 rounded-lg text-sm font-semibold text-red-600 transition cursor-pointer">
                <RiDeleteBin6Line />
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="grow flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center gap-1.5">
              <span className="text-3xl font-medium text-teal-800">
                {friend.lastContact}
              </span>
              <p className="text-sm font-medium text-gray-500">
                Days Since Contact
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center gap-1.5">
              <span className="text-3xl font-medium text-teal-800">
                {friend.goal}
              </span>
              <p className="text-sm font-medium text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center gap-1.5 text-center">
              <span className="text-3xl font-medium text-teal-800">
                {friend.nextDue}
              </span>
              <p className="text-sm font-medium text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-teal-800">
                Relationship Goal
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                Connect every{" "}
                <strong className="text-teal-900 font-bold">
                  {friend.possibleConnectTime} days
                </strong>
              </p>
            </div>
            <button className="bg-white hover:bg-gray-100 border border-gray-200 text-sm font-semibold text-gray-800 px-5 py-2 rounded-lg transition cursor-pointer">
              Edit
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-teal-800">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handleQuickCheckIn(method.label, friend.name)}
                  className="bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl p-8 flex flex-col items-center justify-center gap-3 transition cursor-pointer"
                >
                  {method.icon({ className: "w-8 h-8 text-teal-900" })}
                  <span className="text-sm font-semibold text-teal-950">
                    {method.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
