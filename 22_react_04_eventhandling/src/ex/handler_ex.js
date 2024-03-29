import React from "react";

class Handler_ex extends React.Component {
  constructor() {
    super();
    this.state = { msg: "Hello World" };
  }
  goodbye = () => {
    this.setState({ msg: "Goodbye World" });
  };

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.goodbye}>클릭</button>
      </div>
    );
  }
}

export default Handler_ex;
