import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.props.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input onChange={(e) => this.props.handleNameChange(e)} value={this.props.name} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={(e) => this.props.handleHpChange(e)} value={this.props.hp}fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={(e) => this.props.handleFrontChange(e)} value={this.props.frontUrl}fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={(e) => this.props.handleBackChange (e)} value={this.props.backUrl} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
