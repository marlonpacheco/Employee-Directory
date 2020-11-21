import React from "react";


function SearchBox({ searchFilter }) {
  return (
    <div className="searchbox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={e => searchFilter(e)}
        />
      </form>
    </div>
  );
}
export default SearchBox;
