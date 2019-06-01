import React, { Component } from 'react'
import Pdf from 'react-pdf-js'

export default class CV extends Component {

  render() {

    return (
      <div>
        <div className="man cv">
          <Pdf
            file="assets/Chris_Gullian.pdf" 
            scale={2.0}
          />
        </div>
        <a href="assets/Chris_Gullian.pdf" download="Chris_Gullian.pdf">download</a>
      </div>
    )
  }
}