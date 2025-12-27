import React, { useEffect, useState } from "react";

const API_BASE_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/teams/`)
      .then(res => res.json())
      .then(data => setTeams(data.results || data));
  }, []);

  return <div>Teams</div>;
}
