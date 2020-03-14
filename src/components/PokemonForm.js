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

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    console.log("submitting", this.state )
        fetch('http://localhost:3000/pokemon', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name: this.state.name,
              stats: [
                {
                  value: this.state.hp,
                  name: "hp"
                }
              ],
              sprites: {
                front: this.state.frontUrl,
                back: this.state.backUrl
              }
          }),
        })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .then(this.props.fetchPokemon);
  }

  render() {

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input onChange={(e) => this.handleChange(e)} fluid label="Name" placeholder="Name" name="name" value={this.state.name}/>
            <Form.Input onChange={(e) => this.handleChange(e)} fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input onChange={(e) => this.handleChange(e)} fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input onChange={(e) => this.handleChange(e)} fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
