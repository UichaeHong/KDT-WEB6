import React from "react";

class ClassPractice extends React.Component {
  state = {
    counter: 0,
  };
  up = (name) => {
    console.log(name);
    this.setState({ counter: this.state.counter + 2 });
  };
  down = (name) => {
    console.log(name);
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    const { name, age } = this.props;
    const { counter } = this.state;
    return (
      <div>
        <h1>첫 번째 문제</h1>

        <h5>{counter}</h5>
        <button onClick={() => this.up("abc")}>+2</button>
        <button onClick={() => this.down("abc")}>-1</button>
      </div>
    );
  }
}
export default ClassPractice;
