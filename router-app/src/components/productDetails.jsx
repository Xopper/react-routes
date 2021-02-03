import React, { Component } from "react";

class ProductDetails extends Component {
	handleSave = () => {
		// Navigate to /products
		// push save previous page
		// this.props.history.push("/products");
		// replace unset from history usefull in cases like login
		this.props.history.replace("/products");
	};

	render() {
		// the new way to do it :(
		// let { id } = useParams();
		const { id } = this.props.match.params;
		return (
			<div>
				<h1>Product Details - {id}</h1>
				<button onClick={this.handleSave}>Save</button>
			</div>
		);
	}
}

export default ProductDetails;
