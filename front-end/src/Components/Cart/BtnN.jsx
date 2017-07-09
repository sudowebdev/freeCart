import React from 'react';

import axios from 'axios';
export default class BtnN extends React.Component{

	onClickHandler(){
		axios.put('http://localhost:3333/api/user/1/' + this.props.id + '/decrement')
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			})
	}

	render(){

		return (
			<td>
				<button id={this.props.id} onClick={this.onClickHandler.bind(this)}>Decrement Quantity</button>
			</td>
			);
	}
}