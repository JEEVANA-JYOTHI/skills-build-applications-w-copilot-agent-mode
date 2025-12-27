import React, { useEffect, useState } from "react";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    console.log("Fetching Leaderboard from /api/leaderboard/");
    fetch("/api/leaderboard/")
      .then(res => res.json())
      .then(data => {
        console.log("Leaderboard data:", data);
        setLeaderboard(data.results || data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <table className="table table-bordered">
        <tbody>
          {leaderboard.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
