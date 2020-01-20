import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          onChange={props.handleSearchOnChange}
          value={props.searchParam} 
        />
        <i className="search icon" />
      </div>
      <div>cant combine sorting and searching yet
        <select
          value={props.sort}
          onChange={props.sortChange}
        >
          <option value="no sort">No Sort</option>
          <option value="alphabetically">Alphabetically</option>
          <option value="hp">HP</option>
        </select>
      </div>

    </div>
  )
}

export default Search
