// import { useState } from "react";

// function FunctionComponent() {
//   const [message, setMessage] = useState("검정색버튼"); // message 초기 상태
//   const [Color, setColor] = useState("black"); // message 초기 색깔

//   function red() {
//     // red 버튼 클릭시 black 컬러 => red 컬러,  "검정색버튼" => "빨간색버튼" 으로 message 변경
//     setColor("red");
//     setMessage("빨간색 버튼");
//   }
//   function blue() {
//     // blue 버튼 클릭시 black 컬러 => blue 컬러, "검정색버튼" => "파란색버튼" 으로 message 변경
//     setColor("blue");
//     setMessage("파란색 버튼");
//   }

//   return (
//     <>
//       <h1 style={{ color: Color }}>{message}</h1>
//       <button onClick={red}>red</button>
//       <button onClick={blue}>blue</button>
//     </>
//   );
// }

// export default FunctionComponent;

// ========================================================================================

// import { useState } from "react";

// function FunctionEvent() {
//   const [Count, setCount] = useState(0);

//   const click = (n) => {
//     setCount(Count + n);
//   };

//   const disClick = (n) => {
//     setCount(Count - n);
//   };
//   return (
//     <>
//       <h1>{Count}</h1>
//       <button onClick={() => click(3)}>더하기</button>
//       <button onClick={() => disClick(Count * Count)}>빼기</button>
//     </>
//   );
// }

// export default FunctionEvent;
// ========================================================================================

// function FunctionEvent() {
//   const click = (name) => {
//     alert(name);
//   };
//   return (
//     <>
//       <button onClick={() => click("안녕하세요")}>버튼</button>
//     </>
//   );
// }
// export default FunctionEvent;

// ========================================================================================

import React from "react";

class ClassEvent extends React.Component {
  Btn = () => {
    alert("안녕");
  };

  render() {
    return (
      <>
        <button onClick={this.Btn}>버튼</button>
      </>
    );
  }
}

export default ClassEvent;
