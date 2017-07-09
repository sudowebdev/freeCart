import React from 'react';

import axios from 'axios';
export default class BtnN extends React.Component{

	onClickHandler(){
		this.props.decrement(this.props.id);
	}

	render(){

		return (
			<td>
				<button id={this.props.id} onClick={this.onClickHandler.bind(this)}>Decrement Quantity</button>
			</td>
			);
	}
}