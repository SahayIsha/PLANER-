
import { useState } from "react";

const days = [
  "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7",
  "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14",
  "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20"
];

const checklistItems = [
  "Morning: Lemon water or green tea",
  "Morning fruit (banana/apple/papaya)",
  "Meal: Follow plan or packed",
  "Workout: Follow daily routine",
  "Snacks (if applicable)",
  "Hydration: 2-3L water",
  "Sleep: 7+ hrs",
  "Mindfulness or journaling",
  "Avoid added sugar"
];

export default function Home() {
  const [checked, setChecked] = useState({});

  const toggleCheck = (day, item) => {
    const key = `${day}-${item}`;
    setChecked((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">20-Day Checklist Planner</h1>
      {days.map((day) => (
        <div key={day} className="mb-6 border rounded-xl p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">{day}</h2>
          <ul className="space-y-2">
            {checklistItems.map((item) => {
              const key = `${day}-${item}`;
              return (
                <li
                  key={key}
                  onClick={() => toggleCheck(day, item)}
                  className={`cursor-pointer px-2 py-1 rounded-md transition-colors ${
                    checked[key] ? "bg-green-200 line-through" : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
