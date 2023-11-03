import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUser from './components/CreateUser/CreateUser';
import UserList from './components/UserList/UserList';

function App() {
  const [showUserList, setShowuserList] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <button style={{backgroundColor:  showUserList ? '#3c425c' : 'white'}} className="TabButtons" onClick={() => setShowuserList(false)}>Skapa User</button>
        <button style={{backgroundColor:  showUserList ? 'white' : '#3c425c'}} className="TabButtons" onClick={() => setShowuserList(true)}>Visa Users</button>

        {showUserList ? ( <UserList />) : (<CreateUser/>)}
      </div>
      </header>
    </div>
  );
}

export default App;
