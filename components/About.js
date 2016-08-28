import React from 'react'

export default React.createClass({
  render() {
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