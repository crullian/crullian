import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

class Root extends Component {

  state = {
    isChecked: false
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.setState({isChecked: false});
  }

  handleClick() {
    if (window.innerWidth < 768) {
      this.setState({isChecked: !this.state.isChecked});
    }
  }

  render() {
    let content = this.props.children;

    return (
      <div>
        <nav className="navBar">
          <nav className="wrapper">
            <h1 id="crullian"><Link to="/">Chris Gullian</Link></h1>
            <input checked={this.state.isChecked} type="checkbox" id="menu-toggle" onClick={this.handleClick.bind(this)}/>
            <label htmlFor="menu-toggle" className="label-toggle"></label>
            <ul className="nav">
              <li onClick={this.handleClick.bind(this)}><Link to="/portfolio" activeClassName="active">portfolio</Link></li>
              <li onClick={this.handleClick.bind(this)}><Link to="/cv" activeClassName="active">resume</Link></li>
              <li onClick={this.handleClick.bind(this)}><Link to="/other" activeClassName="active">other stuff</Link></li>
              <li onClick={this.handleClick.bind(this)}><IndexLink to="/" activeClassName="active">home</IndexLink></li>
            </ul>
          </nav>
        </nav>
        <div className="content">
          {content}
        </div>
        <div id="footer"></div>
      </div>
    )
  }
}

export default Root