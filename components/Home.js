import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render() {
    let content = this.props.children;
    if(this.props.location.pathname == '/') {
      content = (
        <div>
          <h3 className="title">the man.</h3>

          <div className="theMan">
            <img src="assets/pixel2.jpg" id="pixel"/>
          </div>
        </div>
      )
    }

    return( 
      <div>
        <h1 id="crullian"><Link to="/">chris gullian.</Link></h1>
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
})