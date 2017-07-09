import React from 'react';


export default class Img extends React.Component{

	render(){
		return (

				<img src={this.props.src} width="50" height="50"/>
			);
	}
}