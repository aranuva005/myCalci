import React, { useState } from "react";
/**
 * @author: Madhavi itikala
 * The below code is to display the no of calculations done by the user.
 * @param counter:Integer
 * @returns jsx
 */
export function Headers() {
	const [counter, setCounter] = useState(23);
	return (
		<header>

			<h1>No of calculations:{counter}</h1>

		</header>

	)

}