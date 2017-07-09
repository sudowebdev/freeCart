import React from 'react';

import Img from './Img.jsx';
import Text from './Text.jsx';


export default class ProductDisplay extends React.Component{


	render(){
		return (
			<div>
				{
					this.props.products.map(function(object){

						return (
							<div key={object.id}>
								<Img src={object.imgurl} />
								<Text text={object.name} />
								<Text text={object.price} />
								<Text text={object.id} />
							</div>	
						)
					
					})
				}
			</div>	
			);
	}
}