import React from 'react'
import KeyPadComponent from './keypadcomponent'
import Result from './result'
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
            keypad:[{
                name :"%" 
            },{
                name :"/" 
            },{
                name :"7" 
            },{
                name :"8" 
            },{
                name :"9" 
            },{
                name :"*" 
            },{
                name :"4" 
            },{
                name :"5" 
            },{
                name :"6" 
            },{
                name :"-" 
            },{
                name :"1" 
            },{
                name :"2" 
            },{
                name :"3" 
            },{
                name :"+" 
            },{
                name :"0" 
            },{
                name :"." 
            }]
		}
	}
// This is an event handler, when an button is clicked the function in event handler will be executed.
	onClick = button => {
		if(button === "="){
			this.calculate()
	}

	else if(button === "AC"){
			this.reset()
	}
	else if(button === "BC"){
			this.backspace()
	}

	else {
			this.setState({
					result: this.state.result + button
			})
	}
	};

	render() {
		// const { displayValue } = this.state;
		return (
			<>
				<div class="container">
					< Result result={this.state.result} />
					< KeyPadComponent onClick={this.onClick} matter = "button num-button"  keypad = {this.state.keypad}/>

				</div>
			</>
		)

	}
}
export default Body;