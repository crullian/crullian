import React, { Component } from 'react'
import Art from './Art'

class ArtList extends Component {
  render() {
    let images = [{
      title: "actaeon",
      img: "/assets/Cuckold.jpg"
    }, {
      title: "sheepgirl",
      img: "/assets/Sheepgirllg.jpg"
    }, {
      title: "bullwoman",
      img: "/assets/Bull Woman.jpg"
    }, {
      title: "cornerpiece",
      img: "/assets/Cornerpiece.jpg"
    }, {
      title: "little man",
      img: "/assets/Little_Man.jpg"
    }, {
      title: "hic maneamus",
      img: "/assets/Hic Maneamus.jpg"
    }].map((work, index) => {
      return ( 
        <Art img={work.img} 
             title={work.title} 
             key={index} />
      )
    });

    return (
      <div>
        <h3 className="title">art.</h3>
        <div className="flex-container">
          {images}
        </div>
      </div>
    )
  }
}

export default ArtList
