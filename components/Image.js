import React from 'react'

const Image = ({src}) => ( 
  <img
    src={src}
    loading="lazy"
    className="image"
  />
);

export default Image