import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {

  render() {
    let content = this.props.children;
    if(this.props.location.pathname == '/') {
      content = (
          <div className="man">
            <div>Hi! Thanks for visiting. I'm a Graduate, Fullstack Academy of Code Software Engineering Immersive Program. Experience building client and server side Web applications using the following technologies</div>
            <div><img src="assets/z.jpg" className="image"/></div>
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