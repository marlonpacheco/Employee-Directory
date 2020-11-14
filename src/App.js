import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Container from "./components/Container";

// import logo from './logo.svg';
import './App.css';

function App() {
  const [employees, showEmployees] = useState([]);
  
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5&nat=us")
      .then((response) => {
        console.log(response.data.results);
        showEmployees([...response.data.results]);
      })
  }, [])

  return (
    <div className="App">
      <Header/>
      <Container employees = {employees}/>
    </div>
  );
}

export default App;
