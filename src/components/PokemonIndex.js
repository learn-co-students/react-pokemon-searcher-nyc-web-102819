import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonIndex extends React.Component {
  
  state = {
    pokemons: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => {
      this.setState({
        pokemons: pokemons
      })
    })
  }

  renderNewPokemon = newPokemon => {
    this.setState({
      pokemons: [...this.state.pokemons, newPokemon]
    })
  }

  handleSearchChange = e => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm renderNewPokemon={this.renderNewPokemon} />
        <br />
        <Search onChange={this.handleSearchChange} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))} />
      </Container>
    )
  }
}

export default PokemonIndex
