
import './App.css';
import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
import UserList from './UserList';

function App() {
 
  return (
    <div className="App">
     <UserList />
    </div>
  );
}

export default App;
// CRUD
//create / read / update / delete
//post /get/put/delete