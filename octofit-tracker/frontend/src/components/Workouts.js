import React, { useEffect, useState } from "react";

const API_BASE = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const url = `${API_BASE}/workouts/`;
    console.log("Fetching Workouts from:", url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("Workouts data:", data);
        setWorkouts(data.results || data);
      });
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map(workout => (
          <li key={workout.id}>{workout.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;


