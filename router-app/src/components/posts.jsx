import React from "react";

/**
 * Self implementaion of isNumber
 * @param {*} toCheck
 */
// const isString = toCheck => typeof toCheck === "string";
const isNumber = toCheck =>
	typeof Number(toCheck) === "number" && !isNaN(Number(toCheck));

const Posts = props => {
	let { year, month } = props.match.params;
	month = isNumber(month) ? Number(month) : "";
	year = isNumber(year) ? Number(year) : "";
	return (
		<div>
			<h1>Posts</h1>
			Year: {year}, Month {month}:
		</div>
	);
};

export default Posts;
