import React, { useEffect, useState } from "react";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("https://8000.app.github.dev/api/leaderboard")
      .then(res => res.json())
      .then(data => setLeaders(data.results || data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map(item => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
