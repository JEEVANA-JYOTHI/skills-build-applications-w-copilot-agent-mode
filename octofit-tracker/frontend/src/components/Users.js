import React, { useEffect, useState } from "react";

const API_BASE = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = `${API_BASE}/users/`;
    console.log("Fetching Users from:", url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log("Users data:", data);
        setUsers(data.results || data);
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;


