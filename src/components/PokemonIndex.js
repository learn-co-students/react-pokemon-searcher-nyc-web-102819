import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state = {
    allPokemon: [],
    pokemon: [],
    search: "",
    new:{
      name:"",
      hp:"",
      imgFront:"",
      imgBack:""

      // name = {pokemon.name}
      // stats = ["","","","","",{value:pokemon.stats[5].value}] 
      // sprites:{ front: "", back: "" }
      
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      this.setState({
        allPokemon: data,
        pokemon: data
      })
    })
  }

  componentDidUpdate(prevProps,prevState) {
    console.log(prevState)
    console.log(this.state)
    
    if(this.state.search !== prevState.search) {
      let list = this.state.allPokemon.filter( each => each.name.includes(this.state.search))
      this.setState({
        pokemon: list
      })
    }

  }

  searchBar = (value) => {
    console.log(value)
    this.setState({
      search: value
    })
  }

  addPokemon = (e) => {
    console.log(e.target[0].value,e.target[1].value,e.target[2].value,e.target[3].value)
    let name = e.target[0].value
    let hp = e.target[1].value
    let frontUrl = e.target[2].value
    let backUrl = e.target[3].value    
    
    
     fetch("http://localhost:3000/pokemon",{
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        
        // figure out the schematic for this to work 
        name: name,
        hp: hp,
        frontUrl: frontUrl,
        backUrl: backUrl
      })
    })
    .then(resp => resp.json())
    .then(data => {
      // console.log(data)
      this.setState({
        pokemon: [...this.state.pokemon, data]
      })
    })

    // this.setState({
      //   
      
      // new: { name: name, hp: hp, imgFront: frontUrl, imgBack: backUrl},
      //   pokemon: [{ name: name, hp: hp, imgFront: frontUrl, imgBack: backUrl},...this.state.pokemon]
      // })

      e.target.reset() // reset form
  }
  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon = {this.addPokemon}/>
        <br />
        <Search value = {this.state.search} onChange={(e) => this.searchBar(e.target.value)} />
        <br />
        <PokemonCollection  pokemon = {this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
 