import React, { Component } from 'react'
import Image from './Image';

const Art = ({img, title}) => ( 
  <div className="theArt">
    <div>
      <Image src={img} />
      <p>{ title }</p>
    </div>
  </div>
);

export default Art
