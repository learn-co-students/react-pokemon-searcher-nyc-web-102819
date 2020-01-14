import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    imgFront: true
  }

  toggleImg = () => {
    this.setState({
      imgFront: !this.state.imgFront
    })
  }



  render() {
    return (
      <Card>
        <div onClick = {this.toggleImg} > 
          <div className="image">
            <img src = {this.state.imgFront? this.props.imgFront:this.props.imgBack} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              <p>{this.props.hp} hp </p>
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
