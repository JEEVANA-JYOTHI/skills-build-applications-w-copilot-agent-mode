import React, { useEffect, useState } from "react";

const API_BASE = "https://-8000.app.github.dev/api";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/workouts`)
      .then(res => res.json())
      .then(data => setWorkouts(data.results || data));
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map(w => (
          <li key={w.id}>{w.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
