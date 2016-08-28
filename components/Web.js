import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="web">
        <div className="each">
          <img src={ this.props.img } id="edj"/>
          <p><a href={ this.props.src }>{ this.props.title }</a></p>
        </div>
      </div>
    )
  }
})
