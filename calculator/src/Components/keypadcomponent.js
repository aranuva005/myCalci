import React, { Component } from 'react';

/**
 * @author: Madhavi itikala ,Ankith, Siva
 * @description:The below code is used to render the buttons of the calculator with onclick event handler.
 * @returns jsx
 */
class KeyPadComponent extends Component {

	render() {
		return (
			<div class="buttons">
				<div id="clear"><button class="button action-btn" name="AC" onClick={e => this.props.onClick( e.target.name )}>AC</button></div>
				<div><button class="button action-btn" name="BC" onClick={e => this.props.onClick( e.target.name )}> BC</button></div>
				{this.props.keypad.map( ( change ) =>
					<div><button class={this.props.matter} name={change.name} onClick={e => this.props.onClick( e.target.name )}> {change.name}</button></div>
				)}
				<div id="total"><button class="button" name="=" onClick={e => this.props.onClick( e.target.name )}>=</button></div>
			</div>

		);
	}
}


export default KeyPadComponent;