import React from 'react'
import Music from './Music'
import { music } from '../data/data.js'

const MusicList = () => (
  <div>
    <div className="grid-container">
      {music.map((song, index) => {
        return (
          <Music
            img={song.img}
            src={song.src}
            title={song.title}
            key={index}
          />
        )
      })}
    </div>
    <p><a href="http://housekeeping.bandcamp.com" target="_blank">more</a></p>
  </div>
)

  export default MusicList;