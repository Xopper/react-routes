import React, { Component, Fragment } from "react";

class MoviesDetails extends Component {
	handleSave = () => {
		console.log(this.props);
		// this.props.history.replace("/movies");
		this.props.history.goBack();
	};

	render() {
		return (
			<Fragment>
				<h1>Movie From {`${this.props.match.params.id}`}</h1>
				<button onClick={this.handleSave} className="btn btn-primary btn-sm">
					Save
				</button>
			</Fragment>
		);
	}
}

export default MoviesDetails;
