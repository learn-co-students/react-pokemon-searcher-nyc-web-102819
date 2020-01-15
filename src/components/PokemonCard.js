import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }

  handleCardFlip = () => {
    this.setState({ front: !this.state.front })
  }



  render() {

    let { name, sprites, stats } = this.props.pokemon;

    return (
      <Card>
        <div onClick={this.handleCardFlip}>
          <div className="image">
            <img src={this.state.front ? sprites.front : sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.find(stat => stat.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
