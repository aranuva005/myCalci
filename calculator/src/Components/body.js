import React from 'react'
/**
 * @author: Madhavi itikala, Ankith, Siva
 * The below code is to display the main body  of the page
 * @returns jsx
 */

class Body extends React.Component {
	render() {

		return (
			<>
				<div class="container">
					<div class="result">
						<p id="result-box">0</p>
					</div>


					<div class="buttons">
						<div class="button action-btn" id="clear"> AC </div>
						<div class="button action-btn"> BC</div>
						<div class="button num-button  action-btn"> %</div>
						<div class="button num-button  calc-action-btn"> /</div>
						<div class="button num-button seven">7</div>
						<div class="button num-button eight">8</div>
						<div class="button num-button  nine">9</div>
						<div class="button num-button  calc-action-btn">*</div>
						<div class="button num-button  four">4</div>
						<div class="button num-button  five">5</div>
						<div class="button num-button  six">6</div>
						<div class="button num-button  calc-action-btn">-</div>
						<div class="button num-button  one">1</div>
						<div class="button num-button  two">2</div>
						<div class="button num-button  three">3</div>
						<div class="button num-button  calc-action-btn">+</div>
						<div class="button num-button  zero">0</div>
						<div class="button num-button  point">.</div>
						<div class="button calc-action-btn" id="total">=</div>
					</div>

				</div>

			</>
		)

	}
}
export default Body;
