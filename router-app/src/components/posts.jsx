import React from "react";
import queryString from "query-string";

/**
 * Self implementaion of isNumber
 * @param {*} toCheck
 */
// const isString = toCheck => typeof toCheck === "string";
const isNumber = toCheck =>
	typeof Number(toCheck) === "number" && !isNaN(Number(toCheck));

const Posts = ({ match, location }) => {
	let { year, month } = match.params;
	month = isNumber(month) ? Number(month) : "";
	year = isNumber(year) ? Number(year) : "";
	const query = queryString.parse(location.search);
	console.log(query);
	return (
		<div>
			<h1>Posts</h1>
			Year: {year}, Month {month}:
		</div>
	);
};

export default Posts;
