import React, { Component } from "react";

/**
 * @author: Madhavi itikala, Ankith, Siva
 * The below code is to display the result of the calculation
 * @returns jsx
 */

class ResultComponent extends Component {
  render() {
    let { result, count } = this.props;
    return (
      <>
        <div>
          <p>{count}</p>
        </div>
        <div class="result">
          <p id="result-box">{result}</p>
        </div>
      </>
    );
  }
}
export default ResultComponent;
