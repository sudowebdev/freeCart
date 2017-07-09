import React from 'react';
import ReactDOM from 'react-dom';


import ProductMain from './Components/ProductCatalog/ProductMain.jsx';
import CartMain from './Components/Cart/CartMain.jsx'

class App extends React.Component{

    render(){ 
    	return(
           <CartMain />
    	);
    }
}

var app = <App/>;
console.log(app);
var node = document.getElementById("app");
console.log(node);
ReactDOM.render(app, node);
