import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'

class Root extends Component {

  state = {
    isChecked: false,
    isScrolled: false
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll)
  }

  handleResize = () => {
    this.setState({isChecked: false});
  }

  handleClick = () => {
    if (window.innerWidth < 768) {
      this.setState({isChecked: !this.state.isChecked});
    }
  }

  handleScroll = (event) => {
    if (window.scrollY > 0) {
      this.setState({isScrolled: true});
    } else {
      this.setState({isScrolled: false});
    }
  }

  render() {
    return (
      <div>
        <nav className={`navBar${this.state.isScrolled ? ' shadow': ''}`}>
          <nav className="wrapper">
            <h1 id="crullian"><Link to="/">Chris Gullian</Link></h1>
            <input checked={this.state.isChecked} type="checkbox" id="menu-toggle" onClick={this.handleClick}/>
            <label htmlFor="menu-toggle" className="label-toggle"></label>
            <ul className="nav" onClick={this.handleClick}>
              <li><Link to="/work" activeClassName="active">work</Link></li>
              <li><Link to="/music" activeClassName="active">music</Link></li>
              <li><IndexLink to="/" activeClassName="active">home</IndexLink></li>
            </ul>
          </nav>
        </nav>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Root