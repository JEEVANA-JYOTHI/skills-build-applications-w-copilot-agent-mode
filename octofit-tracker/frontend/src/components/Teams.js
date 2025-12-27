import React, { useEffect, useState } from "react";

const API_BASE = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const url = `${API_BASE}/teams/`;
    console.log("Fetching Teams from:", url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("Teams data:", data);
        setTeams(data.results || data);
      });
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map(team => (
          <li key={team.id}>{team.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;

