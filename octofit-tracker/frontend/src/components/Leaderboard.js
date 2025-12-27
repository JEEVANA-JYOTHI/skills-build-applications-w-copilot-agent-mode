import React, { useEffect, useState } from "react";

const API_BASE = "https://-8000.app.github.dev/api";

function Leaderboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/leaderboard`)
      .then(res => res.json())
      .then(data => setItems(data.results || data));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {items.map(i => (
          <li key={i.id}>{i.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
