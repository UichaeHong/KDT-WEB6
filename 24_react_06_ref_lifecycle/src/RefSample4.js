import React from "react";

class RefSample4 extends React.Component {
  // 1. createRef() 로 갹채 생성
  myInput = React.createRef();
  handleFocus = () => {
    // 3. current 이용해소 DOM 요소 접근
    console.log(this.myInput);
    this.myInput.current.focus();
  };

  render() {
    return (
      <>
        <p>함수형 컴포넌트에서 버튼 클릭시 input focusing</p>
        {/* 2. 직접 접근해야하는 DOM 요소에 ref prop 설정 */}
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample4;
