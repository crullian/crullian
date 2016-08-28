import React from 'react'

export default React.createClass({
  render() {
    ["               _____           _____                  _ __              ",
      " __________ __/ / (_)__ ____  / ___ \\___ ___ _  ___ _(_) /_______  __ _ ",
      "/ __/ __/ // / / / / _ `/ _ \\/ / _ `/ _ `/  ' \\/ _ `/ / // __/ _ \\/  ' \\",
      "\\__/_/  \\_,_/_/_/_/\\_,_/_//_/\\ \\_,_/\\_, /_/_/_/\\_,_/_/_(_)__/\\___/_/_/_/",
      "                              \\___//___/                                "
    ].forEach(function(ln) {
      console.log(ln)
    });

    return (
      <div>
        <h3 className="title">about me.</h3>

        <div className="theMan">
        <p>Hi I’m Chris. I like making things in the digital world and in the real world. Get in touch with me: <a href="mailto:crullian@gmail.com">crullian@gmail.com</a><span className="desktop-only">Or check the console if you’re into that sort of thing</span></p>
        <img src="assets/wings.jpg" id="pixel"/>
      </div>
      </div>
    )
  }
})