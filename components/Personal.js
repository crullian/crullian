import React, { Component } from 'react'
import { Link } from 'react-router'
import Web from './Web'

export default class Personal extends Component {

  render() {

    let personalWork = [{
      title: "emergency dj",
      img: "/assets/edj.jpg",
      src: "http://emergencydj.herokuapp.com"
    }, {
      title: "vinylcache",
      img: "/assets/vc.jpg",
      src: "http://vinylcache.herokuapp.com"
    }, {
      title: "codestream",
      img: "https://raw.githubusercontent.com/heatherpike/codestream/master/codestream.jpg",
      src: ""
    }, {
      title: "art awesome",
      img: "/assets/aa.jpg",
      src: ""
    }, {
      title: "chord reader",
      img: "/assets/cr.jpg",
      src: ""
    }, {
      title: "tweeter",
      img: "/assets/tw.jpg",
      src: "http://dry-temple-5824.herokuapp.com"
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
        <h3 className="title">personal work.</h3>
        <div className="flex-container">
          { personalWork }
        </div>
      </div>
    )
  }
} 