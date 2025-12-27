import React, { useEffect, useState } from "react";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    console.log("Fetching Teams from /api/teams/");
    fetch("/api/teams/")
      .then(res => res.json())
      .then(data => {
        console.log("Teams data:", data);
        setTeams(data.results || data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <table className="table table-bordered">
        <tbody>
          {teams.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
