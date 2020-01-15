import React from 'react'
import { Form } from 'semantic-ui-react'

const iniState = {
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: ''
}

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = iniState
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
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
          front: this.state.frontUrl,
          back: this.state.backUrl
        },
        stats: [{name: 'hp', value: parseInt(this.state.hp)}]
        })
      })
      .then(resp => resp.json())
      .then(data => {
        this.props.pessismisticallyRender(data)
      })

    this.setState(iniState)
    
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" value={this.state.hp} name="hp" onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" value={this.state.frontUrl} placeholder="url" name="frontUrl" onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" value={this.state.backUrl} placeholder="url" name="backUrl" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
