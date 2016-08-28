import React from 'react'
import Music from './Music'

export default React.createClass({
  render() {
    let songs = [{
      title: "flaunting the sorcery (q.r.)",
      img: "assets/QR blocks.jpg",
      src: "assets/Flaunting The Sorcery (Q.R).mp3"
    }, {
      title: "welcome to the night",
      img: "assets/WTTN cover final mg.jpg",
      src: "assets/Welcome To The Night 23.mp3"
    }, {
      title: "temporary love",
      img: "assets/getting_away.jpg",
      src: "assets/Temporary Love34MP3.mp3"
    }].map((song, index) => {
      return (
        <Music img={song.img}
               src={song.src}
               title={song.title}
               key={index} />
      )
    });

    return (
      <div>
        <h3 className="title">housekeeping (music).</h3>
        {songs}
        <p><a href="http://housekeeping.bandcamp.com" target="_blank">more</a></p>
      </div>
    )
  }
})