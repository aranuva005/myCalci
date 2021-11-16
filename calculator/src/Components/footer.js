import React, { useState } from "react";
import { Link } from "react-router-dom"

import About from "./About";
/**
 * @author: Madhavi itikala, Ankith, Siva
 * The below code is to display the footer of the page
 * @returns jsx
 */
export function Footer() {
    return (
        <footer>copyrights &copy; 2021
            <Link to="/about"> About</Link>
        </footer>

    )


}