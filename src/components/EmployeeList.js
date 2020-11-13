import React from "react";

function EmployeeList(props) {
  return (
    <div>
      {props.results.map(result => (
        <li className="employee">
          <p>{result.name}</p>
          <p>{result.location.city}</p>
        </li>
      ))}
    </div>
  );
}

export default EmployeeList;
