import React, { useEffect, useState } from "react";

const API_BASE = "https://-8000.app.github.dev/api";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/teams`)
      .then(res => res.json())
      .then(data => setTeams(data.results || data));
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map(t => (
          <li key={t.id}>{t.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
