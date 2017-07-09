import React from 'react';

export default class Text extends React.Component{

	render(){
		return (
				<div>{this.props.text}</div>
			);
	}
}