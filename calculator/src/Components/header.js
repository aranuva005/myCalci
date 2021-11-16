import React, { useState } from "react";
/**
 * @author: Madhavi itikala
 * The below code is to display the no of calculations done by the user.
 * @param counter:Integer
 * @returns jsx
 */
export function Headers(props) {
    const { historyCount } = props
    return (
        <header>

            <h1>No of calculations : {historyCount}</h1>

        </header>

    )

}