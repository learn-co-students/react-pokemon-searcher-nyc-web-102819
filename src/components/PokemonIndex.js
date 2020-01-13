import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    searchTerm: "",
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: '',
    sorted: false
  }

  componentDidMount() {
    fetch ('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemon => this.setState({
        allPokemon: pokemon
      }))
  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name, 
        hp: this.state.hp,
        frontUrl: this.state.frontUrl,
        backUrl: this.state.backUrl
      })
    })
    .then( () => {
      fetch ('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemon => this.setState({
        allPokemon: pokemon
      }))
    }
    )
  }

handleNameChange = (e) => {
  this.setState({
    name: e.target.value
  })
}

handleHpChange = (e) => {
  this.setState({
    hp: e.target.value
  })
}

handleFrontChange = (e) => {
  this.setState({
    frontUrl: e.target.value
  })
}

handleBackChange = (e) => {
  this.setState({
    backUrl: e.target.value
  })
}

handleSubmit = () => {
  fetch('http://localhost:3000/pokemon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: this.state.name, 
      hp: this.state.hp,
      frontUrl: this.state.frontUrl,
      backUrl: this.state.backUrl
    })
  })
  .then( () => {
    fetch ('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => this.setState({
      allPokemon: pokemon
    }))
  }
  ).then(
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  )
}

handleAlphaSort = () => {
  this.setState(prevState => ({
    sorted: !prevState.sorted
  }));
}

  render() {

    let lowerCasedSearch = this.state.searchTerm.toLowerCase();

    let filteredPokemon = this.state.allPokemon.filter(pokemon => {
      return lowerCasedSearch.includes(pokemon.name)
    }
    )

    let alphaPokemon = [...this.state.allPokemon]
    alphaPokemon.sort(function (a, b) {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    });

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm 
        name={this.state.name}
        hp={this.state.hp}
        frontUrl={this.state.frontUrl}
        backUrl={this.state.backUrl}
        handleNameChange={this.handleNameChange} 
        handleHpChange={this.handleHpChange}
        handleFrontChange={this.handleFrontChange}
        handleBackChange={this.handleBackChange}
        handleSubmit={this.handleSubmit}/>
        <br />
        <Search searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} />
        <br />
        <button onClick={this.handleAlphaSort}>Sort Alphabetically</button><br></br>
        <PokemonCollection sorted={this.state.sorted} alphaPokemon={alphaPokemon} allPokemon={this.state.searchTerm === "" ? this.state.allPokemon : filteredPokemon} sortedPokemon={alphaPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
