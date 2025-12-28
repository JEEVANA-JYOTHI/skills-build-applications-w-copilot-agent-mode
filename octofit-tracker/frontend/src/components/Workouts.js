import React, { useEffect, useState } from "react";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("https://8000.app.github.dev/api/workouts")
      .then(res => res.json())
      .then(data => setWorkouts(data.results || data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map(item => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
