import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.displayPokemon.map((pokemon) => {
          return(
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
            />
          )
          })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
