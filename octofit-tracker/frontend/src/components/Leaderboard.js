import React, { useEffect, useState } from "react";

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch("https://codespace-8000.app.github.dev/api/leaderboard")
      .then(res => res.json())
      .then(data => setLeaders(data.results || data));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaders.map(l => (
          <li key={l.id}>{l.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
