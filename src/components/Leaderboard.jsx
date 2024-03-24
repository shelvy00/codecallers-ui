import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/user/index')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
        <table>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>score</th>
          </tr>
          {users.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>
                              <a href={`/myaccount/${val.username}`}>{val.username}</a>
                              </td>
                            <td>{val.score}</td>
                        </tr>
                    )
                })}
        </table>

      {/* <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}: {user.score}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Leaderboard;