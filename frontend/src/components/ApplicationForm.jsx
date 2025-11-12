import { useState, useEffect } from "react";

export default function ApplicationForm({
  onSubmit,
  initialData = null,
  onCancel,
}) {
  const [form, setForm] = useState({
    company: "",
    position: "",
    appliedDate: "",
    status: "Applied",
    resumeLink: "",
    notes: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        company: initialData.company || "",
        position: initialData.position || "",
        appliedDate: initialData.appliedDate?.slice(0, 10) || "",
        status: initialData.status || "Applied",
        resumeLink: initialData.resumeLink || "",
        notes: initialData.notes || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      {/* Company */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company <span className="text-red-500">*</span>
        </label>
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="e.g. Google"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {/* Position */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Position <span className="text-red-500">*</span>
        </label>
        <input
          name="position"
          value={form.position}
          onChange={handleChange}
          placeholder="e.g. Software Engineer"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {/* Applied Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Applied Date <span className="text-red-500">*</span>
        </label>
        <input
          name="appliedDate"
          type="date"
          value={form.appliedDate}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          max={new Date().toISOString().split("T")[0]}
          required
        />
      </div>

      {/* Status */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Resume Link */}
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Resume Link <span className="text-gray-400">(optional)</span>
        </label>
        <input
          name="resumeLink"
          value={form.resumeLink}
          onChange={handleChange}
          placeholder="https://..."
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      {/* Notes */}
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Notes <span className="text-gray-400">(optional)</span>
        </label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          placeholder="e.g. Referred by John, follow up next week"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          rows={3}
        />
      </div>

      {/* Buttons */}
      <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3 justify-start mt-2">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow-sm transition"
        >
          {initialData ? "Update" : "Add"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-600 hover:underline px-4 py-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
