// 실습문제2 사리짐 버튼을 누르면 text가 사라지면서 사라짐 버튼이 생김 버튼으로 변경

import { useState } from "react";
// 방법 1

// const Prop2 = () => {
//   const [visible, setVisible] = useState(true);

//   const toggle = () => {
//     setVisible(!visible);
//     // !true => false
//     // !false => true
//   };

//   return (
//     <>
//       <button onClick={toggle}>{visible ? "사라져라" : "보여라"}</button>
//       <h1>{visible && "안녕하세요"}</h1>
//     </>
//   );
// };

// 내가 푼 방식
function Prop2() {
  const [message, setMessage] = useState("사라져라");
  const [display, setdisplay] = useState("block");
  //   const [test, setTest] = useState("");

  const Blue = () => {
    if (display === "none") {
      setMessage("사라져라");
      setdisplay("block");
    } else {
      setMessage("보여라");
      setdisplay("none");
    }
  };

  return (
    <div>
      <>
        <button onClick={Blue}>{message}</button>
        <h1 style={{ display }}>안녕하세요</h1>
      </>
    </div>
  );
}

export default Prop2;
