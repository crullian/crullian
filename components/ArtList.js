import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import Art from './Art'

class ArtList extends Component {
  render() {
    let images = [
      {
        title: "actaeon",
        img: "/assets/Cuckold.jpg"
      },
      {
        title: "bullwoman",
        img: "/assets/Bull Woman.jpg"
      },
      {
        title: "sheepgirl",
        img: "/assets/Sheepgirllg.jpg"
      },
      {
        title: "bullwoman study",
        img: "/assets/20 BullWoman.jpg"
      },
      {
        title: "unsympathetic portrait",
        img: "/assets/Unsympathetic Portrait.jpg"
      },
      {
        title: "cornerpiece",
        img: "/assets/Cornerpiece.jpg"
      },
      {
        title: "little man",
        img: "/assets/Little_Man.jpg"
      },
      {
        title: "hic maneamus",
        img: "/assets/Hic Maneamus.jpg"
      },
      {
        title: "wrapped portrait",
        img: "/assets/Wrapped Portrait2.jpg"
      },
      {
        title: "celia",
        img: "/assets/Celia Walking2.jpg"
      },
      {
        title: "candace",
        img: "/assets/Lisa, In the Light1.jpg"
      },
      {
        title: "luca",
        img: "/assets/Luca1.jpg"
      },
      {
        title: "gisant",
        img: "/assets/Gisant.jpg"
      },
      {
        title: "father and child",
        img: "/assets/Father and Child.jpg"
      },
      {
        title: "father and child (detail)",
        img: "/assets/09 Father and Child (detail).jpg"
      },
      {
        title: "father and child (detail)",
        img: "/assets/FthrnChld2.jpg"
      },
    ].map((work, index) => {
      return ( 
        <Link
          to={{
            pathname: `/art/${work.title}`,
            state: {
              artwork: work
            }
          }}
          key={index}
        >
          <Art
            img={work.img} 
            title={work.title} 
          />
        </Link>
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
