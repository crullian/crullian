import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {

  render() {
    let content = this.props.children;

    if(this.props.location.pathname == '/') {
      content = (
        <div>
          <div className="man">
            <div className="section copy">
              <h3>tl;dr</h3>
              <p>Hi! I'm a Software Developer with 
                 two years of agency and startup experience building client 
                 and server side web applications using modern
                 technologies. </p>
            </div>
            <div className="section">
              <img src="/assets/z.jpg" className="image"/>
            </div>
          </div>
        </div>
      )
    }

    let resumeLink = <li><Link to="/cv">resume</Link></li>
    let homeLink = null;
    let nameplate = <h1 id="crullian"><Link to="/">Chris Gullian</Link></h1>;

    if (this.props.location.pathname == '/cv') {
      nameplate = null;
      resumeLink = null;
      homeLink = <li><Link to="/">home</Link></li>
    }

    return( 
      <div>
        { nameplate }
        <ul className="nav">
          <li><Link to="/about">about</Link></li>
          <li><Link to="/portfolio">portfolio</Link></li>
          { resumeLink }
          <li><Link to="/other">other stuff</Link></li>
          { homeLink }
        </ul>
        {content}
        <div id="footer"></div>
      </div>
    )
  }
}
