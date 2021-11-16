import React, { Component } from "react";

/**
 * @author: Madhavi itikala, Ankith, Siva
 * The below code is to display the result of the calculation
 * @returns jsx
 */

class ResultComponent extends Component {
  render() {
    let { result } = this.props;
    return (
      <div class="result">
        <p id="result-box">{result}</p>
      </div>
    );
  }
}
export default ResultComponent;
