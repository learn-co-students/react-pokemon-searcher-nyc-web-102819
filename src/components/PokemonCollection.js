import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {

    let pokemonArray = this.props.allPokemon.map(pokemonObj => 
      <PokemonCard pokemon={pokemonObj} key={pokemonObj.id}/>)

    let sortedPokemonArray = this.props.alphaPokemon.map(pokemonObj => 
      <PokemonCard pokemon={pokemonObj} key={pokemonObj.id}/>)

    return (
      <Card.Group itemsPerRow={6}>
        {this.props.sorted ? sortedPokemonArray : pokemonArray}
      </Card.Group>
    )
  }
}

export default PokemonCollection
