import React from 'react';

import Img from './Img.jsx';
import Text from './Text.jsx';
import Btn from './Btn.jsx';

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
								<Btn id={object.id} />
							</div>	
						)
					
					})
				}
			</div>	
			);
	}
}