import { useEffect, useState } from "react";
import api from "../utils/api";
import { useAuth } from "../context/AuthContext";
import ApplicationForm from "../components/ApplicationForm";
import WelcomeMessage from "../components/WelcomeMessage";
import StatusSummary from "../components/StatusSummary";
import ConfirmDialog from "../components/ConfirmDialog";
import toast from "react-hot-toast";

export default function Dashboard() {
  const { user } = useAuth();
  const [apps, setApps] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [editApp, setEditApp] = useState(null);
  const [deleteAppId, setDeleteAppId] = useState(null);

  useEffect(() => {
    if (user) fetchApplications();
  }, [user]);

  const fetchApplications = async () => {
    try {
      const { data } = await api.get("/applications");
      setApps(data);
    } catch (err) {
      toast.error("Failed to load applications");
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (editApp) {
        await api.put(`/applications/${editApp._id}`, formData);
        toast.success("Application updated");
      } else {
        await api.post("/applications", formData);
        toast.success("Application added");
      }
      setShowForm(false);
      setEditApp(null);
      fetchApplications();
    } catch (err) {
      toast.error("Failed to submit application");
    }
  };

  const confirmDelete = async () => {
    try {
      await api.delete(`/applications/${deleteAppId}`);
      toast.success("Application deleted");
      setDeleteAppId(null);
      fetchApplications();
    } catch (err) {
      toast.error("Failed to delete application");
    }
  };

  const handleEdit = (app) => {
    setEditApp(app);
    setShowForm(true);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "applied":
        return "bg-blue-100 text-blue-700";
      case "interview":
        return "bg-yellow-100 text-yellow-800";
      case "offer":
        return "bg-green-100 text-green-700";
      case "rejected":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const filteredApps =
    filteredStatus === "All"
      ? apps
      : apps.filter((app) => app.status === filteredStatus);

  if (!user) return <WelcomeMessage />;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">Your Job Applications</h2>
        <button
          onClick={() => {
            setEditApp(null);
            setShowForm(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          + Add Application
        </button>
      </div>

      {/* Filters and Status Count */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
        {/* Filter Dropdown */}
        <div>
          <label className="block mb-1 text-sm font-medium">Filter by Status</label>
          <select
            value={filteredStatus}
            onChange={(e) => setFilteredStatus(e.target.value)}
            className="border rounded p-2 w-full sm:w-48"
          >
            <option value="All">All</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        {/* Status Count Summary */}
        <StatusSummary apps={filteredApps} />
      </div>

      {/* Application Form */}
      {showForm && (
        <div className="bg-gray-100 p-4 mb-6 rounded shadow">
          <ApplicationForm
            onSubmit={handleSubmit}
            initialData={editApp}
            onCancel={() => {
              setShowForm(false);
              setEditApp(null);
            }}
          />
        </div>
      )}

      {/* Applications List */}
      <div className="flex flex-col gap-4">
        {filteredApps.map((app) => (
          <div
            key={app._id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center border rounded-md bg-white shadow-sm p-4 hover:shadow-md transition"
          >
            {/* Left */}
            <div className="flex-1 mb-4 sm:mb-0">
              <h3 className="text-lg font-bold">{app.company}</h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm text-gray-700">{app.position}</span>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded ${getStatusColor(
                    app.status
                  )}`}
                >
                  {app.status}
                </span>
              </div>
            </div>

            {/* Middle */}
            <div className="flex-1 sm:px-4 text-sm text-gray-600 w-full">
              <div className="flex flex-wrap items-center gap-4 mb-1">
                <span>
                  Applied: {new Date(app.appliedDate).toLocaleDateString()}
                </span>
                {app.resumeLink && (
                  <a
                    href={app.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Resume
                  </a>
                )}
              </div>
              {app.notes && <div className="italic">{app.notes}</div>}
            </div>

            {/* Right */}
            <div className="flex gap-3 mt-4 sm:mt-0 sm:ml-auto">
              <button
                onClick={() => handleEdit(app)}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => setDeleteAppId(app._id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}

        {filteredApps.length === 0 && (
          <p className="text-gray-500 text-center mt-4">
            No applications found for this status.
          </p>
        )}
      </div>

      {/* Confirmation Dialog */}
      <ConfirmDialog
        open={!!deleteAppId}
        onCancel={() => setDeleteAppId(null)}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this application?"
      />
    </div>
  );
}
