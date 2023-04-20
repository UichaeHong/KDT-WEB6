import PropTypes from "prop-types";
import { useState } from "react";

// function Hicomponent() {
//   const [message, setMessage] = useState("안녕하세요");
//   const [bool, setBool] = useState(false);
//   // console.log(counter);
//   //console.log(props);

//   const In = () => {
//     setMessage("입장하였습니다");
//     console.log("입장하였습니다");
//   };
//   const Out = () => {
//     setMessage("퇴장하였습니다");
//     console.log("퇴장하였습니다");
//   };
//   const Test = () => {
//     setMessage("");
//     console.log("초기화");
//   };
//   const onClick = () => {
//     setBool(true);
//   };
//   return (
//     <div>
//       {bool && (
//         <>
//           <h5>{message}</h5>
//           <button onClick={In}>입장</button>
//           <button onClick={Out}>퇴장</button>
//           <button onClick={Test}>초기화</button>
//         </>
//       )}
//       <button onClick={onClick}>로그인성공</button>

//       {/* <h1>안녕하세요</h1> */}
//     </div>
//   );
// }

// // 실습 문제
function Hicomponent() {
  const [message, setMessage] = useState("검정색 글씨");
  const [Color, colorMessage] = useState("black");
  //   const [bool, setBool] = useState(false);
  // console.log(counter);
  //console.log(props);

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

// Hicomponent.defaultProps = {
//   message: "검은색 글씨",
// };

// FunctionComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.string,
// };

// const FunctionComponent = () => {};
export default Hicomponent;

// function Hicomponent() {
//   const [message, setMessage] = useState("사라져라");
//   const [display, setdisplay] = useState("block");
//   //   const [test, setTest] = useState("");

//   const Blue = () => {
//     if (display === "none") {
//       setMessage("사라져라");
//       setdisplay("block");
//     } else {
//       setMessage("보여라");
//       setdisplay("none");
//     }
//   };

//   return (
//     <div>
//       <>
//         <button onClick={Blue}>{message}</button>
//         <h1 style={{ display }}>안녕하세요</h1>
//       </>
//     </div>
//   );
// }

// export default Hicomponent;
