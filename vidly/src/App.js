import React, { Component, Fragment } from "react";
import Movies from "./components/movies";
import "./App.css";
import NavBar from "./components/navBar";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import notFount from "./components/notFound";
import MoviesDetails from "./components/moviesDetails";

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<NavBar />
					<main className="container mt-4">
						<Switch>
							<Route path="/movies/:id" component={MoviesDetails} />
							<Route path="/customers" component={Customers} />
							<Route path="/rentals" component={Rentals} />
							<Route path="/not-found" component={notFount} />
							<Route path="/movies" component={Movies} />
							<Redirect exact from="/" to="/movies" />
							<Redirect to="/not-found" />
						</Switch>
					</main>
				</Fragment>
			</Router>
		);
	}
}

export default App;
