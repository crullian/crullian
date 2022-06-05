import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import { art } from '../data/data.js';
import Art from './Art'

class ArtList extends Component {
  render() {
    return (
      <div className="grid-container">
        {art.map((work, index) => {
          return ( 
            <Link
              to={{
                pathname: `/work/${work.title}`,
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
        })}
      </div>
    )
  }
}

export default ArtList
