import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemonCards = () => {
    return this.props.data.map(pokemon => <PokemonCard name={pokemon.name} hp={pokemon.stats.find(statistic => statistic.name === 'hp').value} front={pokemon.sprites.front} back={pokemon.sprites.back}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemonCards()}
        </Card.Group>
    )
  }
}

export default PokemonCollection
