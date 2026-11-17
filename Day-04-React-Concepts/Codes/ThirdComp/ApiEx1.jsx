import React, { useState, useEffect } from "react";
export default function ApiEx1() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    window
      .fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <div>
      <p>Users list from jsonplaceholder...</p>
      <table border="2px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
