import React, { useEffect, useState } from "react";

const API_BASE_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/activities/`)
      .then(res => res.json())
      .then(data => setActivities(data.results || data));
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
