import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import PokemonCard from './PokemonCard'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonIndex extends React.Component {

  state = {
    data: [],
    search: ''
  }

  handleSearchChange = (search) => {
    this.setState({
      search: search
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemons => this.setState({
      data: pokemons
    }))
  }

  render() {
    let renderedPokemon = this.state.data.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search search={this.handleSearchChange} searchValue={this.state.search}/>
        <br />
        <PokemonCollection data={renderedPokemon}/>
      </Container>
    )
  }
}

export default PokemonIndex
