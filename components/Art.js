import React from 'react'

export default React.createClass({
  render() {
    
    return ( 
      <div className="theArt">
        <div>
          <img src={ this.props.img } id="work"/>
          <p>{ this.props.title }</p>
        </div>
      </div>
    )
  }
})