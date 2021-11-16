import React from 'react'
import KeyPadComponent from './keypadcomponent'
import Result from './result'
import { Headers } from './header';
/**
 * @author: Madhavi itikala, Ankith, Siva
 * The below code is to display the main body  of the page
 * @returns jsx
 */

class Body extends React.Component {

    //using props and sending the data
    constructor(props) {
        super(props);

        this.state = {
            result: "",
            history: [],
            keypad: [{
                name: "%"
            }, {
                name: "/"
            }, {
                name: "7"
            }, {
                name: "8"
            }, {
                name: "9"
            }, {
                name: "*"
            }, {
                name: "4"
            }, {
                name: "5"
            }, {
                name: "6"
            }, {
                name: "-"
            }, {
                name: "1"
            }, {
                name: "2"
            }, {
                name: "3"
            }, {
                name: "+"
            }, {
                name: "0"
            }, {
                name: "."
            }]
        }
    }
    // This is an event handler, when an button is clicked the function in event handler will be executed.
    onClick = button => {
        if (button === "=") {

            console.log(this.state)
            this.calculate()
            this.setState({ history: (this.state.history) + (this.state.result) })
        }

        else if (button === "AC") {
            this.reset()
        }
        else if (button === "BC") {
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
    // This is an event handler, when an button is clicked the function in event handler will be executed.
    // eval function evaluates or executes an argument
    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: "",
            history: []
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        // const { displayValue } = this.state;
        return (
            <>
                <Headers historyCount={this.state.history.length}></Headers>
                <div class="container">
                    < Result result={this.state.result} history={this.state.history} />
                    < KeyPadComponent onClick={this.onClick} matter="button num-button" keypad={this.state.keypad} />

                </div>
            </>
        )

    }
}
export default Body;