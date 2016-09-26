import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Portfolio extends Component {

  render() {

    return (
       <div>
        <h3 className="title">portfolio.</h3>

        <div className="man">
          <ul>
            <li><Link to="/portfolio/client">client work.</Link></li>
            <li><Link to="/portfolio/personal">personal work</Link></li>
          </ul>
          {this.props.children}
        </div>
      </div>
    )
  }
} 