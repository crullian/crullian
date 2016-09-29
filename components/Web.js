import React from 'react'
import { Link } from 'react-router'

export default class Web extends React.Component {
  render() {
    return (
      <div className="web">
        <img src={ this.props.img } className="image"/>
        <p><a href={ this.props.src } target="_blank">{ this.props.title }</a></p>
      </div>
    )
  }
}
