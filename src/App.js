import React, { useState, useEffect } from "react";
import axios from "axios";

import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5&nat=us")
      .then(response => {
        console.log(response)
      })
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
