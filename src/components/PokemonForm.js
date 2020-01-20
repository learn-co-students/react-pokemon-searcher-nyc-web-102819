import React from 'react'
import { Form } from 'semantic-ui-react'

const initialState = {
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: ''
}

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = initialState
  }

  handleChange = (e) => {       
    this.setState({ [e.target.name]: e.target.value })
  }
    


  handleSubmit = (e) => {               //review this
    e.preventDefault()
    fetch(`http://localhost:3000/pokemon`,
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [{
          value: parseInt(this.state.hp),
          name:'hp'
        }],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      })
    })
    .then(resp => resp.json())
    .then(pokemonObj => {
      this.props.addPokemon(pokemonObj)})   
    this.setState(initialState)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              fluid label="Name" 
              placeholder="Name" 
              name="name" 
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Input 
              fluid label="hp" 
              placeholder="hp" 
              name="hp" 
              value={this.state.hp}
              onChange={this.handleChange}
            />
            <Form.Input 
              fluid label="Front Image URL" 
              placeholder="url" 
              name="frontUrl" 
              value={this.state.frontUrl}
              onChange={this.handleChange}
            />
            <Form.Input 
              fluid label="Back Image URL" 
              placeholder="url" 
              name="backUrl" 
              value={this.state.backUrl}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
