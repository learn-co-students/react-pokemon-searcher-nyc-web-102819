import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
      name: '',
      hp: '',
      frontURL: '',
      backURL: ''
    }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        stats: [
          {
            value: parseInt(this.state.hp, 10),
            name: 'hp'
          }],
        sprites: 
          {
            front: this.state.frontURL,
            back: this.state.backURL
          }
      })
    })
    .then(res => res.json())
    .then(newPokemon => {
      this.props.renderNewPokemon(newPokemon)
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.handleChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.handleChange} fluid label="Front Image URL" placeholder="URL" name="frontURL" />
            <Form.Input onChange={this.handleChange} fluid label="Back Image URL" placeholder="URL" name="backURL" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
