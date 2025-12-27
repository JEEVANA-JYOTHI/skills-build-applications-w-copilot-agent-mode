import React, { useEffect, useState } from "react";

const API_BASE = "https://-8000.app.github.dev/api";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/users`)
      .then(res => res.json())
      .then(data => setUsers(data.results || data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
