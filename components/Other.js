import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Other extends Component {

  render() {

    return (
      <div>
        <div className="man">
          <h3 className="title">Other Stuff</h3>
          <li><Link to="/art">art</Link></li>
          <li><Link to="/music">music</Link></li>
        </div>
      </div>
    )
  }
} 