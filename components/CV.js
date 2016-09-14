import React from 'react'
import Pdf from 'react-pdf-js'

export default React.createClass({
  render() {
    return (
      <div className="theMan">
        <Pdf className="SimplePDF" file="assets/Chris_gullian.pdf" />
      </div>
    )
  }
})