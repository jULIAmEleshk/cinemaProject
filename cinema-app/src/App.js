import React, { Component } from 'react';
// import { Redirect, Link, Route,Switch } from 'react-router-dom';
// import Movies from './Movies';
// import Products from './Products';
// import  Login, { fakeAuth }  from './Login';
import Header from './components/Header';
// import Header from './Header';
// import Aside from './Aside';

// import  Login, { fakeAuth }  from './Login';

import './App.css';
// import './index.css';
import './scss/style.scss';
class App extends Component {
render() {

	return (
	
		<div>
		<Header/>
		{/* <Header/>
		  <nav className="navbar navbar">     
			<ul className="nav navbar-nav">
				<li><Link to="/">Homes</Link></li>
				<li><Link to="/movies">Movies</Link></li>
				<li><Link to="/admin">Admin area</Link></li>
			</ul>
		 </nav>
		
		 <Switch>
			<Route path="/login" component={Login}/>
			<Route exact path="/" component={Home}/>
			<Route path="/movies" component={Movies}/>
			<PrivateRoute path='/admin' component = {Admin} />
			<Route path="/products" component={Products}/>
		 </Switch>  */}
		</div>
	);
}
}

// //Private router function 
// const PrivateRoute = ({component: Component, ...rest}) => {
// return (
// 	<Route
// 		{...rest}
// 		render={(props) => fakeAuth.isAuthenticated === true
// 			? <Component {...props} />
// 			: <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
// )
// }

// //Home component
// const Home = (props) => (
// <div>
// 	<h2>Home {console.log(props)}</h2>
// </div>
// )

// //Admin component
// const Admin = ({ match }) => {
// return(<div> <h2>Welcome admin </h2></div>)


// }


export default  App;