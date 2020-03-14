import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <div>
          <h1>Hello From Pokemon Collection</h1>
          {this.props.isLoaded 
          ? this.props.pokemon.filter(pokemon => pokemon.name.includes(`${this.props.searchTerm}`)).map(filteredPokemon => 
            <PokemonCard pokemon={filteredPokemon} key={filteredPokemon.id}/>)
          : ""
          }

        </div>
      </Card.Group>
    )
  }
}

export default PokemonCollection
