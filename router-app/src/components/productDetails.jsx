import React, { Component } from "react";

class ProductDetails extends Component {
	handleSave = () => {
		// Navigate to /products
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
