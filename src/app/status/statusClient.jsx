"use client";
import React, { useState } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const COLORS = {
  Call: "#1a3a2a",
  Text: "#9b59d0",
  Video: "#2ecc71",
};

const CustomLegend = ({ data }) => (
  <div className="flex items-center justify-center gap-5 mt-4">
    {data.map((entry) => (
      <div key={entry.name} className="flex items-center gap-1.5">
        <span
          className="w-2.5 h-2.5 rounded-full inline-block"
          style={{ backgroundColor: COLORS[entry.name] }}
        />
        <span className="text-xs text-gray-500">{entry.name}</span>
      </div>
    ))}
  </div>
);

const StatusClient = () => {
  const [events] = useState(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("checkInEvents") || "[]");
  });

  const counts = events.reduce((acc, e) => {
    acc[e.method] = (acc[e.method] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(counts).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Friendship Analytics
        </h1>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <p className="text-sm font-medium text-gray-500 mb-4">
            By Interaction Type
          </p>

          {chartData.length === 0 ? (
            <div className="flex items-center justify-center h-48 text-gray-400 text-sm">
              No interactions yet. Go check in with a friend!
            </div>
          ) : (
            <>
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {chartData.map((entry) => (
                      <Cell
                        key={entry.name}
                        fill={COLORS[entry.name] || "#ccc"}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => [`${value} interactions`, name]}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #f0f0f0",
                      fontSize: "12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <CustomLegend data={chartData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusClient;
