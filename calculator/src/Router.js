import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from './App'
import About from "./Components/About";

/**
 * @author: Madhavi itikala Ankith Siva
 * The below code helps to Route between pages
 * @returns jsx
 */

function RoutePage() {
    return (
        <>
            <Router >
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/about" component={About} />
                </Switch>

            </Router>
        </>

    )
}

export default RoutePage