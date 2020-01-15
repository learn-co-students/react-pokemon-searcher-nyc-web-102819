import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {

  state = {
    pokemonArray: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(pokemonArray => this.setState({pokemonArray}))
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  pessismisticallyRender = (newPokemon) => {
    this.setState({pokemonArray: [...this.state.pokemonArray, newPokemon]})
  }


  render() {
    
    let displayPokemon = this.state.pokemonArray.filter(
      pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    )

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm pessismisticallyRender={this.pessismisticallyRender}/>
        <br />
        <Search onChange={this.handleChange} />
        <br />
        <PokemonCollection pokemonArray={displayPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
