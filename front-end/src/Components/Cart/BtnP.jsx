import React from 'react';

import axios from 'axios';
export default class BtnP extends React.Component{

	onClickHandler(){
		this.props.increment(this.props.id);
	}

	render(){

		return (
			<td>
				<button id={this.props.id} onClick={this.onClickHandler.bind(this)}>Increment Quantity</button>
			</td>
			);
	}
}