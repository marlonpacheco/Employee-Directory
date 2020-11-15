import axios from "axios";
import React, { useState, useEffect, useReducer, useRef } from "react";
import Header from "./components/Header";
import EmployeeContainer from "./components/Container";
import Navbar from "./components/Navbar";

// import logo from './logo.svg';
import './App.css';

// export default class DataArea extends Component{
//  state = {
//    employees: [{}],
//   filteredEmployees: [{}]
//  }

//  searchFilter = event => {
//   console.log(event.target.value);
//   const filter = event.target.value;
//   const filteredList = this.state.employees.filter(item => {
//     // merge data together, then see if user input is anywhere inside
//     let values = Object.values(item)
//       .join("")
//       .toLowerCase();
//     return values.indexOf(filter.toLowerCase()) !== -1;
//   });
//   this.setState({ filteredEmployees: filteredList });
// }

//  componentDidMount() {
//   axios.get("https://randomuser.me/api/?results=5&nat=us")
//       .then(results => {
//     this.setState({
//       employees: results.data.results,
//       filteredEmployees: results.data.results
      
//     },
//     console.log(results.data.results)
//     );
//   });
// }

// render() {
//   return (
//     <div className="App">
//       <Header />
//       <Navbar searchFilter={this.searchFilter}/>
//       <EmployeeContainer employees={employees} />
//     </div>
//   );
// }

// }

function App() {
  const [employees, showEmployees, filteredEmployees] = useState([]);
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5&nat=us")
      .then((response) => {
        console.log(response.data.results);
        showEmployees([...response.data.results]);
        filteredEmployees([...response.data.results]);

      });
  }, []);

  searchFilter = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredEmployees: filteredList });
  }

  return (
    <div className="App">
      <Header />
      <Navbar searchFilter={this.searchFilter}/>
      <EmployeeContainer employees={employees} />
    </div>
  );
}

export default App;
