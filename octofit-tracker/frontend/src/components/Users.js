import React, { useEffect, useState } from "react";

const API_BASE_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api`;

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/users/`)
      .then(res => res.json())
      .then(data => setUsers(data.results || data));
  }, []);

  return <div>Users</div>;
}
