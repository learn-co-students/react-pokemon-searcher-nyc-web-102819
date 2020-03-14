import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: {}, 
    isLoaded: false, 
    searchTerm: ""
  }
  
  componentDidMount(){
    this.fetchPokemon()
  }

  handleChange(e){
    this.setState({
      searchTerm: e.target.value
    })
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          pokemon: data, 
          isLoaded: true
        })
      });
  }

  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm fetchPokemon={this.fetchPokemon}/>
        <br />
        <Search onChange={(e) => this.handleChange(e)} />
        <br />
        <PokemonCollection  searchTerm={this.state.searchTerm} pokemon={this.state.pokemon} isLoaded={this.state.isLoaded}/>
      </Container>
    )
  }
}

export default PokemonPage
