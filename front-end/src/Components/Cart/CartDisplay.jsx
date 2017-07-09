import React from 'react';

import Text from './Text.jsx';
import BtnP from './BtnP.jsx';
import BtnN from './BtnN.jsx';

export default class CartDisplay extends React.Component{


	render(){
		return (
			<table>
				<thead>
					<tr>
						<th>S.No.</th>
						<th>Product ID</th>
						<th>Quantity</th>
						<th>Increment Quantity</th>
						<th>Decrement Quantity</th>
					</tr>
				</thead>
				<tbody>
				{
					this.props.cart.map(function(object){

						return (
							<tr key={object.id}>
								<Text text={object.id} />
								<Text text={object.productId} />
								<Text text={object.quantity} />
								<BtnP id={object.productId} />
								<BtnN id={object.productId} />
							</tr>

							);
					})
				}
				</tbody>
			</table>	
			);

	}
}