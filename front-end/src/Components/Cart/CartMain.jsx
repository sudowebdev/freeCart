import React from 'react';

import CartDisplay from './CartDisplay.jsx';

import axios from 'axios';

export default class CartMain extends React.Component{

	constructor(){
		super();

		this.state = {cartProducts: []}
	}

	componentDidMount(){

		let url = "http://localhost:3333/api/user/1/cart";

		let config = {};
		config.headers = {
            
            "Content-Type" : "application/x-www-form-urlencoded"
        };

        axios.get(url, config)
        	.then((response){
        		console.log(response);

        		this.setState(cartProducts: response.data);
        	})
        	.catch((error){
        		console.log(error);
        	})
	}

	render(){


	return(

		<CartDisplay cart={this.state.cartProducts}/>
		);
	}

}