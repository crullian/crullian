import React from 'react'
import Image from './Image';

const Detail = (props) => (
	<div className="detail">
    <Image src={props.location.state.artwork.img} />
    <div>
      <p style={{fontSize: "20px"}}>"{props.location.state.artwork.title}"</p>
      <p>{props.location.state.artwork.medium}</p>
    </div>
  </div>
)

export default Detail;