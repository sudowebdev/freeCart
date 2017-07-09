import React from 'react';


export default class Text extends React.Component{

	render(){

		return (
				<td>
					<div>{this.props.text}</div>
				</td>
			);
	}
}