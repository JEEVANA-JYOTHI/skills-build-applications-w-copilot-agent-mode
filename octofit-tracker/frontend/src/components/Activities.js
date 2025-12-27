import React, { useEffect, useState } from "react";

const API_BASE = "https://-8000.app.github.dev/api";

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/activities`)
      .then(res => res.json())
      .then(data => setActivities(data.results || data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map(a => (
          <li key={a.id}>{a.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
