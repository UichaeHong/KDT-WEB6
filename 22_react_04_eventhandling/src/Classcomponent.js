import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Codingon",
    };

    // this.printConsole = this.printConsole.bind(this);
  }

  printConsole() {
    console.log("버튼 클릭 >>", this.state);
  }

  printConsole2 = (msg) => {
    console.log(msg);
  };
  render() {
    return (
      <div>
        클래스형 컴포넌트에서 이벤트 사용해보기
        {/* classcomponent에서 함수를 이용할 때 앞에 this를 입력해야 함 */}
        <button onClick={this.printConsole}>print console</button>
        <button onClick={() => this.printConsole2("hihi")}>
          print console
        </button>
      </div>
    );
  }
}
export default ClassComponent;
