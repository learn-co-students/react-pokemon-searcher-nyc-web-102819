import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'


class PokemonPage extends React.Component {
  state = {
    allPokemon: [],
    searchParam: '',
    sort: "no sort"
  }

  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`)
    .then(resp => resp.json())
    .then(data => {this.setState({allPokemon: data})})
  }

  handleSearchOnChange = (e) => {
    e.persist()
    this.setState({searchParam: e.target.value})
  }

  addPokemon = (pokemonObj) => {            
    this.setState({ allPokemon: [...this.state.allPokemon, pokemonObj] })
  }

  sortChange = (e) => {
    this.setState ({ sort: e.target.value })
  }

  render() {
    // logic for what pokemon to display. cannot combine search and sort
    let displayPokemon = []
    if (this.state.sort === "no sort") {
      if (this.state.searchParam === ''){
        displayPokemon = this.state.allPokemon
      } else {
        displayPokemon = this.state.allPokemon.filter(pokemon => {
          return pokemon.name.includes(this.state.searchParam)}
      )}
    } else if (this.state.sort === "alphabetically") {
      displayPokemon = this.state.allPokemon.sort((pOne, pTwo) => (pOne.name > pTwo.name) ? 1 : -1)
    } else if (this.state.sort === "hp") {
      displayPokemon = this.state.allPokemon.sort((pOne, pTwo) => (pOne.stats.find((stat) => stat.name === "hp").value > pTwo.stats.find((stat) => stat.name === "hp").value) ? 1 : -1)
    }

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
          addPokemon={this.addPokemon}
        />
        <br />
        <Search 
          searchParam={this.state.searchParam}
          handleSearchOnChange={this.handleSearchOnChange} 
          sortChange={this.sortChange}
          sort={this.state.sort}
        />
        <br />
        <PokemonCollection 
          displayPokemon={displayPokemon}
        />
      </Container>
    )
  }
}

export default PokemonPage
