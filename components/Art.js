import React, { Component } from 'react'

class Art extends Component {
  render() {

    return ( 
      <div className="theArt">
        <div>
          <img src={ this.props.img } className="image"/>
          <p>{ this.props.title }</p>
        </div>
      </div>
    )
  }
}

export default Art
