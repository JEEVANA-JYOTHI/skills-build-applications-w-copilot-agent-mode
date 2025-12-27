import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Fetching Users from /api/users/");
    fetch("/api/users/")
      .then(res => res.json())
      .then(data => {
        console.log("Users data:", data);
        setUsers(data.results || data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <table className="table table-bordered">
        <tbody>
          {users.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
