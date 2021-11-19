/**
 * @author: Madhavi itikala, Ankith, Siva
 * The below code is to display the main body  of the page
 * @returns jsx
 */

import React from 'react'
import KeyPadComponent from './keypadcomponent'
import Result from './result'
import { Headers } from './header';
// import {storeHistory,storeResult} from "../store/actions"
import {storeHistory} from "../store/actions"
import {connect} from "react-redux"

const mapStateToProps =(state)=>({
historyLength:state.user?.history?.length
})
const mapDispatchToProps =()=>({ 
    storeHistory  //,storeResult
})
class Body extends React.Component {

    //using props and sending the data
    constructor(props) {
        super(props);

        this.state = {
            result: "",
           // count:0,
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
            this.calculate()
            if(this.state.result === "" || this.state.result === "0" || this.state.result === "/" || this.state.result === "*" || this.state.result === "-" || this.state.result === "+" || this.state.result === "%" || this.state.result === "." || this.state.result == "error"){
                this.state.count = this.state.count;
            }else{
                let arr=[...this.state.history]
            // let arr1=[...this.state.result]
            arr.push(this.state.result)
            this.props.storeHistory(arr)
            //this.props.storeResult(arr)
            this.setState({ history: arr })
            }
        }
            
        else if (button === "AC") {
            this.reset()
        }
        else if (this.state.result === "error" || this.state.result === "Infinity") {
            this.setState({
                result: this.state.result
            })
        }
        else if (button === "BC") {
            this.backspace()
        }

        else if (this.state.result.length > 9) {
            this.setState({
                result: "error"
            })
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
                result: (eval(this.state.result) || "") + "",
                
                
            })
        } catch (e) {
            this.setState({
                result: "error",
                historyLength: this.state.history

            })

        }
    };


    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        
        return (
            <>
            {/* <h1>{this.props.historyLength}</h1> */}
                <Headers setCount={this.props.historyLength}></Headers>
                <div class="container">
                    < Result result={this.state.result} history={this.state.history} />
                    < KeyPadComponent onClick={this.onClick} matter="button num-button" keypad={this.state.keypad} />

                </div>
            </>
        )

    }
}
export default connect(mapStateToProps,mapDispatchToProps())(Body);
