import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class Container extends Component{
    state = {
        search: "",
        results: []
      };
    
    
    generateList = query => {
        API.search(query)
          .then(res => this.setState({ results: res.data.data }))
          .catch(err => console.log(err));
      };


    render(){
        return(
            <div>
<EmployeeList>

</EmployeeList>

            </div>
        )
    }
}

export default Container;