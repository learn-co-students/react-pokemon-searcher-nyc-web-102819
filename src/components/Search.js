import React from 'react'

class Search extends React.Component {
  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" value={this.props.searchTerm} onChange={(e) => this.props.handleSearch(e)} />
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
