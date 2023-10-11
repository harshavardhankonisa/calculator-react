import "./Calculator.css";
import React, { Component } from "react";
import * as math from "mathjs";

export class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      result: "0",
      input: "",
    };
  }

  // MathJS installed to calculate the result.
  calculateResult = () => {
    const { input } = this.state;
    try {
      const result = math.evaluate(input);
      if (result > 999999999999) {
        this.setState({ result: "Math Error", input: "" });
      } else {
        this.setState({ result: result.toFixed(2), input: "" });
      }
    } catch (error) {
      this.setState({ result: "Syntax Error", input: "" });
    }
  };

  // Handles the button clicks of controls
  handleButtonClick = (value) => {
    const { input } = this.state;
    if (value === "C") {
      this.setState({ result: "0", input: "" });
    } else if (value === "Del") {
      this.setState({
        input: input.slice(0, -1),
      });
    } else if (value === "=") {
      this.calculateResult();
    } else {
      this.setState({
        input: input + value,
      });
    }
  };

  render() {
    const { result, input } = this.state;
    return (
      <div className="Calculator">
        <div className="Display">
          <p>{input || result}</p>
        </div>
        <div className="Dialpad">
          <button
            onClick={() => this.handleButtonClick("C")}
            className="Operation"
          >
            C
          </button>
          <button
            onClick={() => this.handleButtonClick("Del")}
            className="Operation"
          >
            Del
          </button>
          <button
            onClick={() => this.handleButtonClick("%")}
            className="Operation"
          >
            %
          </button>
          <button
            onClick={() => this.handleButtonClick("/")}
            className="Operation"
          >
            /
          </button>
          <button onClick={() => this.handleButtonClick("7")}>7</button>
          <button onClick={() => this.handleButtonClick("8")}>8</button>
          <button onClick={() => this.handleButtonClick("9")}>9</button>
          <button
            className="Operation"
            onClick={() => this.handleButtonClick("*")}
          >
            *
          </button>
          <button onClick={() => this.handleButtonClick("4")}>4</button>
          <button onClick={() => this.handleButtonClick("5")}>5</button>
          <button onClick={() => this.handleButtonClick("6")}>6</button>
          <button
            className="Operation"
            onClick={() => this.handleButtonClick("-")}
          >
            -
          </button>
          <button onClick={() => this.handleButtonClick("1")}>1</button>
          <button onClick={() => this.handleButtonClick("2")}>2</button>
          <button onClick={() => this.handleButtonClick("3")}>3</button>
          <button
            className="Operation"
            onClick={() => this.handleButtonClick("+")}
          >
            +
          </button>
          <button
            className="button-broad"
            onClick={() => this.handleButtonClick("0")}
          >
            0
          </button>
          <button onClick={() => this.handleButtonClick(".")}>.</button>
          <button
            className="Operation"
            onClick={() => this.handleButtonClick("=")}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
