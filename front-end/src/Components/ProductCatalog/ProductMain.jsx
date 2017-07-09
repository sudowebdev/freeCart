import React from 'react';

import ProductDisplay from './ProductDisplay.jsx';

import axios from 'axios';

export default class ProductMain extends React.Component{

	constructor(){
		super();

		this.state = {products: []};
	}

	componentDidMount(){

		var url = "http://localhost:3333/api/products";
        var config = {};                                                                                                                               
        config.headers = {
            
            "Content-Type" : "application/x-www-form-urlencoded"
        };

        axios.get(url, config).then(
            function(response){
                console.log(response);

                
                var products = response.data;
                this.setState({products: products});
            }.bind(this))
	}
	render(){
		return (
			<ProductDisplay products={this.state.products} />
			);
	}
} 