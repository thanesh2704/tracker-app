// components/TrackerForm.js

import { useState } from "react";

const fields = [
  "Workout Done? (Y/N)",
  "Muscle Group Trained",
  "Weight (kg)",
  "Calories Eaten (~2100 Target)",
  "Protein Intake (g) (150g Target)",
  "Water Intake (L)",
  "Creatine Taken? (Y/N)",
  "Sleep Hours",
  "AM - Face Washed",
  "AM - Vitamin C Applied",
  "AM - Niacinamide Applied",
  "AM - Aloe Vera Gel Used",
  "AM - Under Eye Cream Used",
  "AM - Sunscreen Applied",
  "PM - Face Washed",
  "PM - Vitamin C or Niacinamide",
  "PM - Aloe Vera Gel Used",
  "PM - Under Eye Cream Used",
  "PM - Moisturizer (if needed)",
  "Mood/Energy/Face Puffiness"
];

export default function TrackerForm() {
  const [form, setForm] = useState({});

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Tracking Data:", form);
    alert("Progress saved ✅");
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold text-center">My Daily Progress</h1>
      {fields.map((field) => (
        <div key={field} className="space-y-1">
          <label className="text-sm font-medium block">{field}</label>
          {field.includes("Y/N") ? (
            <select
              value={form[field] || ""}
              onChange={(e) => handleChange(field, e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          ) : field.includes("Mood") || field.includes("Group") ? (
            <textarea
              placeholder="Enter details..."
              value={form[field] || ""}
              onChange={(e) => handleChange(field, e.target.value)}
              className="w-full border p-2 rounded"
            />
          ) : (
            <input
              type="text"
              value={form[field] || ""}
              onChange={(e) => handleChange(field, e.target.value)}
              className="w-full border p-2 rounded"
            />
          )}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="w-full mt-4 p-2 bg-black text-white rounded"
      >
        Save Today’s Entry
      </button>
    </div>
  );
}
