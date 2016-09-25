import React from 'react'

export default class Art extends React.Component {
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