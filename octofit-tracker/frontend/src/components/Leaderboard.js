import React, { useEffect, useState } from "react";

const API_BASE = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

function Leaderboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = `${API_BASE}/leaderboard/`;
    console.log("Fetching Leaderboard from:", url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("Leaderboard data:", data);
        setItems(data.results || data);
      });
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
