import React, { useEffect, useState } from "react";

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    console.log("Fetching Activities from /api/activities/");
    fetch("/api/activities/")
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
