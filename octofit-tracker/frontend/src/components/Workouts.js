import React, { useEffect, useState } from "react";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    console.log("Fetching Workouts from /api/workouts/");
    fetch("/api/workouts/")
      .then(res => res.json())
      .then(data => {
        console.log("Workouts data:", data);
        setWorkouts(data.results || data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      <table className="table table-bordered">
        <tbody>
          {workouts.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Workouts;
