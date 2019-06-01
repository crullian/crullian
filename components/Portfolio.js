import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Portfolio extends Component {

  render() {

    return (
       <div>
        <h3 className="title">web.</h3>

        <div className="flex-container">
          
              <Link to="/portfolio/client">
                <div className="web">
                  <img src="/assets/q22_screen.jpg" className="image"/>
                  <p>client work.</p>
                </div>
              </Link>
            
              <Link to="/portfolio/personal">
                <div className="web">
                  <img src="/assets/vc.jpg" className="image"/>
                  <p>personal work</p>
                </div>
              </Link>
         
          {this.props.children}
        </div>
      </div>
    )
  }
} 