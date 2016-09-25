import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {

  render() {
    let content = this.props.children;
    if(this.props.location.pathname == '/') {
      content = (
          <div className="theMan">
            <span>Hello World</span>
            <span><img src="assets/z.jpg" className="image"/></span>
          </div>
      )
    }

    return( 
      <div>
        <h1 id="crullian"><Link to="/">Chris Gullian</Link></h1>
        <ul className="nav">
          <li><Link to="/music">music</Link></li>
          <li><Link to="/art">art</Link></li>
          <li><Link to="/web">web</Link></li>
          <li><Link to="/about">about</Link></li> 
        </ul>
        {content}
      </div>
    )
  }
}