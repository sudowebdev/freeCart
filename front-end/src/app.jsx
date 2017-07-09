import React from 'react';
import ReactDOM from 'react-dom';


import ProductMain from './Components/ProductCatalog/ProductMain.jsx';
class App extends React.Component{

    render(){ 
    	return(
           <ProductMain />
    	);
    }
}

var app = <App/>;
console.log(app);
var node = document.getElementById("app");
console.log(node);
ReactDOM.render(app, node);
