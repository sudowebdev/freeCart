import React from 'react';

import axios from 'axios';

export default class Btn extends React.Component{

	onClickListener(){
		axios.post('http://localhost:3333/api/products/addtocart/' + this.props.id, {
		    
		  })
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}
	render(){
		return (

			<button id={this.props.id} onClick={this.onClickListener.bind(this)}>Add to Cart</button>
			);
	}
}