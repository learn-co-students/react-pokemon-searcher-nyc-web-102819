import React from 'react'
import { Form } from 'semantic-ui-react'
let firstState = {
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: ''
}

class PokemonForm extends React.Component {
  constructor() {
    super()
    this.state = firstState
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
      name: this.state.name,
      sprites: {
        front: this.state.frontURL,
        back: this.state.backURL
      },
      stats: [{name: 'hp', value: parseInt(this.state.hp)}]
    })
  })
  .then(res => res.json())
  .then(data => {
  console.log(data)
  this.props.renderPokemon(data)
})
  this.setState(firstState)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={this.state.frontURL}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} value={this.state.backURL}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
