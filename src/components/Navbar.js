import React from "react";
import SearchBox from "./SearchBox.js";

function Navbar({ searchFilter }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse row" id="navbarNav">
        <SearchBox searchFilter={searchFilter} />
      </div>
    </nav>
  );
}
export default Navbar;
