import React, { useEffect, useState } from "react";

const API_BASE_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/workouts/`)
      .then(res => res.json())
      .then(data => setWorkouts(data.results || data));
  }, []);

  return <div>Workouts</div>;
}
