// A simple React app for iPhone-based transformation tracking
// Based on user-uploaded CSV structure

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

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
        <Card key={field} className="shadow-md">
          <CardContent className="space-y-1 p-2">
            <Label className="text-sm font-medium">{field}</Label>
            {field.includes("Y/N") ? (
              <Select onValueChange={(val) => handleChange(field, val)}>
                <SelectTrigger>
                  <div>{form[field] || "Select"}</div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            ) : field.includes("Mood") || field.includes("Group") ? (
              <Textarea
                placeholder="Enter details..."
                value={form[field] || ""}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            ) : (
              <Input
                type="text"
                value={form[field] || ""}
                onChange={(e) => handleChange(field, e.target.value)}
              />
            )}
          </CardContent>
        </Card>
      ))}
      <Button className="w-full mt-4" onClick={handleSubmit}>
        Save Today’s Entry
      </Button>
    </div>
  );
}
