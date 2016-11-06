import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

class Root extends Component {
  render() {
    let content = this.props.children;
    console.log('PATHNAME', this.props.location.pathname);

    return (
      <div>
        <h1 id="crullian"><Link to="/">Chris Gullian</Link></h1>
        <ul className="nav">
          <li><Link to="/portfolio" activeClassName="active">portfolio</Link></li>
          <li><Link to="/cv" activeClassName="active">resume</Link></li>
          <li><Link to="/other" activeClassName="active">other stuff</Link></li>
          <li><IndexLink to="/" activeClassName="active">home</IndexLink></li>
        </ul>
        {content}
        <div id="footer"></div>
      </div>
    )
  }
}

export default Root