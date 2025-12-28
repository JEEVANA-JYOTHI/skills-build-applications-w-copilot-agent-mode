import React, { useEffect, useState } from "react";

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
      fetch("https://codespace-8000.app.github.dev/api/activities")

      .then(res => res.json())
      .then(data => setActivities(data.results || data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map(item => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
