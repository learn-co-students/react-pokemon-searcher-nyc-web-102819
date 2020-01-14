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

  componentDidUpdate(prevProps,prevState) {
    console.log(prevState)
    console.log(this.state)
  }

  handleSubmit = (e) => {
    console.dir(e.targe)
    // console.dir(e.target[0].value)
    // console.dir(e.target[1].value)
    // console.dir(e.target[2].value)
    // console.dir(e.target[3].value)

    // this.setState({
    //   name: e.target[0].value,
    //   hp: e.target[1].value,
    //   frontUrl: e.target[2].value,
    //   backUrl: e.target[3].value
    // })



  }
  // this.handleSubmit(e)
  // this.props.addPokemon(e.target[0].value,e.target[1].value,e.target[2].value,e.target[3].value)

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.props.addPokemon(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
 