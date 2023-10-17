import React from 'react'
import Image from './Image';
import { art } from '../data/data.js';

class Detail extends React.Component {
	componentDidMount() {
    window.scrollTo(0,0)
  }

  findDetail = () => art.find(obj => {
	  return obj.title === decodeURIComponent(this.props.location.pathname.split("/").pop());
	})

	render() {
		const detail = this.findDetail();
		return (
			<div className="detail">
		    <Image src={detail.img} />
		    <div>
		      <p style={{fontSize: "20px"}}>"{detail.title}"</p>
		      <p>{detail.medium}</p>
		    </div>
		  </div>
		)
	}
}

export default Detail;