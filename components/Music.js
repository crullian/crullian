import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="music">
        <img id="connect" src={ this.props.img }/>
        <p>{ this.props.title }</p>
        <audio src={ this.props.src } controls></audio>
      </div>
    )
  }
})
