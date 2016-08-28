import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="web">
        <img src={ this.props.img } className="image"/>
        <p><a href={ this.props.src }>{ this.props.title }</a></p>
      </div>
    )
  }
})
