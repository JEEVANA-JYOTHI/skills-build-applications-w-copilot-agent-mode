import React, { useEffect, useState } from "react";

const API_BASE = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const url = `${API_BASE}/activities/`;
    console.log("Fetching Activities from:", url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("Activities data:", data);
        setActivities(data.results || data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;



