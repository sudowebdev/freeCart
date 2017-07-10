import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ProductMain from './Components/ProductCatalog/ProductMain.jsx';
import CartMain from './Components/Cart/CartMain.jsx'

class App extends React.Component{

    render(){ 
    	return(
           
         <Router>
				<div>
			      <ul>
			        <li><Link to="/">Home</Link></li>
			        <li><Link to="/cart">Cart</Link></li>
			      </ul>

		     	<hr/>

			      <Route exact path="/" component={ProductMain}/>
			      <Route path="/cart" component={CartMain}/>
		   		</div>
			</Router>      
      
    	);
    }
}

var app = <App />;
console.log(app);
var node = document.getElementById("app");
console.log(node);
ReactDOM.render(app, node);
