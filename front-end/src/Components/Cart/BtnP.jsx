import React from 'react';

import axios from 'axios';
export default class BtnP extends React.Component{

	onClickHandler(){
		axios.put('http://localhost:3333/api/user/1/' + this.props.id + '/increment')
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
				<button id={this.props.id} onClick={this.onClickHandler.bind(this)}>Increment Quantity</button>
			</td>
			);
	}
}