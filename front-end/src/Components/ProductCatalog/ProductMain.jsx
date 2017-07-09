import React from 'react';

import Img from './Img.jsx';
import Text from './Text.jsx';

export default class ProductMain extends React.Component{

	constructor(){
		super();

		this.state = {src: "./images/iphone7.jpeg", name: "iPhone7", price: 0, id: 0};
	}
	render(){
		return (
			<div>
				<Img src={this.state.src} />
				<Text text={this.state.name} />
				<Text text={this.state.price} />
				<Text text={this.state.id} />
			</div>
			);
	}
} 