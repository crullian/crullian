import React, { Component } from 'react'

class ArtItem extends Component {
  render() {
    console.log('THIS>PROPS', this.props.location.state)
    return ( 
      <div className="theArtItem" style={{
        padding: '50px',
      }}>
        <img
          src={this.props.location.state.artwork.img}
          style={{
            width: '100%',
          }}
        />
      </div>
    )
  }
}

export default ArtItem