import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    front: true
  }

    handleCardClick = () => {
      this.setState({ front: !this.state.front})
    }

  render() {
    let { name, stats, sprites} = this.props.poke
    let hp = stats.find(array => array.name === 'hp').value

    return (
      <Card onClick={this.handleCardClick}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.front ? sprites.front : sprites.back}/>
          </div>
          <div className="content">
            <div className="header"> {name}
            </div>
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
