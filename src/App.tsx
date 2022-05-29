import React from 'react';
import './App.css';
import Users from './Components/Users';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <h2>User Management</h2>
      <Counter/>
      <Users/>
    </div>
  );
}

export default App;
