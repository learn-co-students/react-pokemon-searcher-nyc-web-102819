import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
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
        "height": ``,
        "weight": ``,
        "name": `${this.state.name}`,
        "abilities": [],
        "moves": [],
        "stats": [{
          "value": `${this.state.hp}`,
          "name": `hp`
        }],
        "sprites": {
          "front": `${this.state.frontUrl}`,
          "back": `${this.state.backUrl}`
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" onChange={event => this.handleChange(event)} placeholder="Name" name="name" value={this.state.name}/>
            <Form.Input fluid label="hp" onChange={event => this.handleChange(event)} placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" onChange={event => this.handleChange(event)} placeholder="url" name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" onChange={event => this.handleChange(event)} placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
