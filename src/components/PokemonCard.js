import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    isClicked: false
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {

    let hp = this.props.pokemon.stats.find( stat => stat.name === 'hp').value

    return (
      <Card onClick={() => this.handleClick()}>
        <div>
          <div className="image">
            {this.state.isClicked 
              ? <img src={this.props.pokemon.sprites.back} alt="oh no!" />
              : <img src={this.props.pokemon.sprites.front} alt="oh no!" />
              }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
