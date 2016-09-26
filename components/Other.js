import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Other extends Component {

  render() {

    return (
      <div>
        <h3 className="title">Other Stuff</h3>
        <div className="man">
          <li><Link to="/other/art">art</Link></li>
          <li><Link to="/other/music">music</Link></li>
        </div>
      </div>
    )
  }
} 