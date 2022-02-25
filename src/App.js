import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUsersHandler = (name, age) => {
    setUsers([...users, {name, age, id: Math.random().toString() }]);
  };
  
  return (
    <div>
      <AddUser onAddUsers={addUsersHandler} />
      <UserList users={users} setUsers={setUsers} />
      {console.log(users)}
    </div>
  );
}

export default App;
