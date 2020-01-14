import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  

  loadPokemon = (list) => {
    // console.log(list)
    return list.map(pokemon => {
      // console.dir(pokemon)
      return <PokemonCard 
        toggleImg = {this.toggleImg}
        key = {pokemon.id}
        name = {pokemon.name}
        hp = {pokemon.stats.find(stat => stat.name ==='hp').value} 
        imgFront = {pokemon.sprites.front}
        imgBack = {pokemon.sprites.back}
       />}
    )
  }
  
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1> <hr/>
        {this.loadPokemon(this.props.pokemon)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
 