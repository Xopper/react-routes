import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<div className="content">
					<Switch>
						<Route path="/products/:id" component={ProductDetails} />
						<Route
							path="/products"
							render={props => <Products srotBy="newest" {...props} />}
						/>
						<Route path="/posts/:year?/:month?" component={Posts} />
						<Route path="/admin" component={Dashboard} />
						<Route path="/404" component={NotFound} />
						<Route path="/" exact component={Home} />
						<Redirect to="/404" />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
