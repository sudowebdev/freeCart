import React from 'react';

import CartDisplay from './CartDisplay.jsx';

import axios from 'axios';

export default class CartMain extends React.Component{

	constructor(){
		super();

		this.state = {cartProducts: []};
		this.reRenderIncremented = this.reRenderIncremented.bind(this);
		this.reRenderDecremented = this.reRenderDecremented.bind(this);
	}

	reRenderIncremented(id){

		axios.put('http://localhost:3333/api/user/1/' + id + '/increment')
			.then((response) => {
				console.log(response.data);
				axios.get('http://localhost:3333/api/user/1/cart')
		        	.then(function(newResponse){
		                console.log(newResponse);

		                
		                
		                this.setState({cartProducts: newResponse.data});
		            }.bind(this))
		        	.catch((error) => {
		        		console.log(error);
		        	})	
			})
			.catch((error) => {
				console.log(error);
			})
	}

	reRenderDecremented(id){
		axios.put('http://localhost:3333/api/user/1/' + id + '/decrement')
			.then((response) => {
				console.log(response.data);
				axios.get('http://localhost:3333/api/user/1/cart')
		        	.then(function(newResponse){
		                console.log(newResponse);

		                
		                
		                this.setState({cartProducts: newResponse.data});
		            }.bind(this))
		        	.catch((error) => {
		        		console.log(error);
		        	})	
			})
			.catch((error) => {
				console.log(error);
			})

	}

	componentDidMount(){

		let url = "http://localhost:3333/api/user/1/cart";

		let config = {};
		config.headers = {
            
            "Content-Type" : "application/x-www-form-urlencoded"
        };

        axios.get(url, config)
        	.then(function(response){
                console.log(response);

                
                
                this.setState({cartProducts: response.data});
            }.bind(this))
        	.catch((error) => {
        		console.log(error);
        	})
	}

	render(){


		return(

			<CartDisplay cart={this.state.cartProducts} increment={this.reRenderIncremented} decrement	={this.reRenderDecremented}/>
			);
	}

}