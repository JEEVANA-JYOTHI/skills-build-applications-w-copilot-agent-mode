import React, { useEffect, useState } from "react";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://codespace-8000.app.github.dev/api/teams")
      .then(res => res.json())
      .then(data => setTeams(data.results || data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map(item => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
