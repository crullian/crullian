import React, { Component } from 'react'
import Web from './Web'

export default class Client extends Component {

  render() {

    let clientWork = [{
      title: "Qatar 2022",
      img: "/assets/q22_screen.jpg",
      src: "http://sc.qa"
    }, {
      title: "MyCourt",
      img: "/assets/mycourt.jpg",
      src: "http://www.croscon.com/tools/mycourt/"
    }, {
      title: "Gem Safe",
      img: "/assets/gemsafe.jpg",
      src: "http://gemsafe.com"
    }, {
      title: "Museum of Feelings",
      img: "/assets/glademof_screen.jpg",
      src: "http://www.themuseumoffeelings.com"
    }, {
      title: "Ocean Health Index",
      img: "/assets/ohi_screen.jpg",
      src: "http://www.oceanhealthindex.org"
    }, {
      title: "Web Thriftstore",
      img: "/assets/webthrift_screen.jpg",
      src: "http://webthriftstore.com"
    }].map((project, index) => {
      return (
        <Web img={project.img}
             title={project.title}
             src={project.src}
             key={index} />
      )
    });

    return (
      <div>
        <h3 className="title">client work.</h3>
        <div className="flex-container">
          { clientWork }
        </div>
      </div>
    )
  }
} 
