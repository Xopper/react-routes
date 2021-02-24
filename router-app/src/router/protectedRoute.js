import React from "react";
import { Route } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...args }) {
	return (
		<Route
			{...args}
			render={(props) => {
				// check if the user is logged or not {auth check}
				return <Component {...props} />;
			}}
		/>
	);
}
