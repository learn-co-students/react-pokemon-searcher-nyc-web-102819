import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state = {
    pokemon: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(data => this.setState({ pokemon: data })
        )
    }

    handleChange = (e) => {
      this.setState({ searchTerm: e.target.value})
    }
  
    renderPokemon = (newPokemon) => {
      this.setState({ pokemon: [...this.state.pokemon, newPokemon]})
    }

  render() {
    let filteredPokemon = this.state.pokemon.filter(array => array.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    // console.log(filteredPokemon)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm renderPokemon={this.renderPokemon}/>
        <br />
        <Search onChange={this.handleChange} value={this.state.searchTerm} />
        <br />
        <PokemonCollection 
        pokemon={filteredPokemon}
          />
      </Container>
    )
  }
}

export default PokemonPage
