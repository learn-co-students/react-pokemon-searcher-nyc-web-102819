import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    cardClicked: false
  }

  handleClick = () => {
    this.setState({
      cardClicked: !this.state.cardClicked
    })
  }

  cards = () => {
    if (this.state.cardClicked === true) {
    return <Card>
        <div onClick={this.handleClick}>
      <div className="image">
        <img src={this.props.back} alt="oh no!" />
      </div>
      <div className="content">
        <div className="header">{this.props.name}</div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat red" />
          {this.props.hp} hp
        </span>
      </div>
    </div>
    </Card>
    } else if (this.state.cardClicked === false) {
        return <Card>
          <div onClick={this.handleClick}>
      <div className="image">
        <img src={this.props.front} alt="oh no!" />
      </div>
      <div className="content">
        <div className="header">{this.props.name}</div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat red" />
          {this.props.hp} hp
        </span>
      </div>
    </div>
  </Card>
    }
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          {this.cards()}
        </div>
      </Card>
    )
  }
}

export default PokemonCard
