// // 실습 문제 1
// 기본 text 색깔은 검은색으로 빨간색 버튼을 누르면 text는 빨간색으로 바뀌고, 파란색 버튼을 누르면 text는 파란색으로 바뀜

import { useState } from "react";
// 방법 1

// const Prop1 = () => {
//   const [color, setColor] = useState("black");
//   const [text, setText] = useState("검정색 글씨");

//   const Red = () => {
//     setText("빨간색 글씨");
//     setColor("red");
//   };
//   const Blue = () => {
//     setText("파란색 글씨");
//     setColor("blue");
//   };
//   return (
//     <>
//       <h1>실습 풀이1</h1>
//       <h2 style={{ color: color }}>{text}</h2>
//       <button onClick={Red}>빨간색</button>
//       <button onClick={Blue}>파란색</button>
//     </>
//   );
// };

// 방법 2
// state 변수 1개로 풀어보기
// const Prob1 = () => {
//   const [state, setState] = useState({
//     color: 'black',
//     text: '검정색 글씨',
//   });

//   const onClickRed = () => {
//     setState({
//       color: 'red',
//       text: '빨간색 글씨',
//     });
//   };

//   const onClickBlue = () => {
//     setState({
//       color: 'blue',
//       text: '파란색 글씨',
//     });
//   };

//   return (
//     <>
//       <h1 style={{ color: state.color }}>{state.text}</h1>
//       <button onClick={onClickRed}>빨간색</button>
//       <button onClick={onClickBlue}>파란색</button>
//     </>
//   );
// };

// export default Prob1;
// 내가 푼 방식
function Prop1() {
  const [message, setMessage] = useState("검정색 글씨");
  const [Color, colorMessage] = useState("black");
  //   const [bool, setBool] = useState(false);
  //   console.log(counter);
  //   console.log(props);

  const Red = () => {
    colorMessage("red");
    setMessage("빨간색 글씨");
    // console.log("빨간색");
  };
  const Blue = () => {
    colorMessage("blue");
    setMessage("파란색 글씨");
    // console.log("파란색");
  };

  return (
    <div>
      <div style={{ color: Color }}>
        <h5>{message}</h5>
      </div>
      <button onClick={Red} style={{ color: "red" }}>
        빨간색
      </button>
      <button onClick={Blue} style={{ color: "blue" }}>
        파란색
      </button>
    </div>
  );
}

export default Prop1;
