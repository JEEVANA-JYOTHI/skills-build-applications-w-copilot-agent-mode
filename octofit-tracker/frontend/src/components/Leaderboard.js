import React, { useEffect, useState } from "react";

const API_BASE_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/leaderboard/`)
      .then(res => res.json())
      .then(data => setLeaders(data.results || data));
  }, []);

  return <div>Leaderboard</div>;
}
