import React from 'react'
import Web from './Web'

export default React.createClass({
  render() {
    let images = [{
      title: "emergency dj",
      img: "assets/edj.jpg",
      src: "http://emergencydj.herokuapp.com"
    }, {
      title: "vinylcache",
      img: "assets/vc.jpg",
      src: "http://vinylcache.herokuapp.com"
    }, {
      title: "codestream",
      img: "https://raw.githubusercontent.com/heatherpike/codestream/master/codestream.jpg",
      src: ""
    }, {
      title: "art awesome",
      img: "assets/aa.jpg",
      src: ""
    }, {
      title: "chord reader",
      img: "assets/cr.jpg",
      src: ""
    }, {
      title: "tweeter",
      img: "assets/tw.jpg",
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
        <h3 className="title">web.</h3>
        {images}
      </div>
    )
  }
})