import React from "react";

export default function StatusSummary({ apps }) {
  const statusCounts = apps.reduce(
    (acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1;
      return acc;
    },
    {}
  );

  const statusStyles = {
    Applied: "bg-blue-100 text-blue-700",
    Interview: "bg-yellow-100 text-yellow-800",
    Offer: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-600",
  };

  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {["Applied", "Interview", "Offer", "Rejected"].map((status) => (
        <div
          key={status}
          className={`text-sm px-3 py-1 rounded-full font-medium ${statusStyles[status]}`}
        >
          {status}: {statusCounts[status] || 0}
        </div>
      ))}
    </div>
  );
}
