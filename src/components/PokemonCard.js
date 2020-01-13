import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));
  }

  render() {

    let dataBackUrl
    let dataFrontUrl
    let hpNumber

    if (this.props.pokemon.sprites) {
      dataBackUrl = this.props.pokemon.sprites.back
      dataFrontUrl = this.props.pokemon.sprites.front
      hpNumber = this.props.pokemon.stats[5].value
      } else {
      dataBackUrl = this.props.pokemon.backUrl;
      dataFrontUrl = this.props.pokemon.frontUrl;
      hpNumber = this.props.pokemon.hp
    }

    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            {/* <img src={this.state.clicked ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front } alt={this.props.pokemon.name} /> */}
            <img src={this.state.clicked ? dataBackUrl : dataFrontUrl } alt={this.props.pokemon.name} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpNumber}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
