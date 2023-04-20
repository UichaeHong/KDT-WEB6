// import "./App.css";

// // import ClassComponent from "./ClassComponent";

// // function App() {
// //   const onClick = () => {
// //     console.log("abc");
// //   };

// //   return (
// //     <>
// //       <div className="App">
// //         <header className="App-header" style={{ backgroundColor: "black" }}>
// //           {/*  */}
// //           {/* {(i = 0 ? "안녕하세요" : "안녕히가세요")} */}
// //           <p onClick={onClick}>
// //             Edit ddd<code>src/App.js</code> and save to reload.
// //           </p>
// //           <a
// //             className="App-link"
// //             href="https://reactjs.org"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Learn React
// //           </a>
// //         </header>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;
// import ClassComponent from "./ClassComponent";
// import FunctionComponent from "./FunctionComponent";
// import Practice from "./Practice";

// function App() {
//   const name = "태리";
//   const animal = "강아지";
//   const title = "Hello world";
//   return (
//     <>
//       {/* <div>
//         <div>
//           이것은 div입니다
//           <h3>이것은 div 안에 있는 h3태그입니다</h3>
//         </div>
//         <div>제 반려동물의 이름은 {name}</div>
//         <div>
//           {name}은 {animal}입니다
//         </div>
//         {3 + 5 == 8 ? "정답입니다" : "오답입니다"}
//       </div>
//       <div className="test">
//         <h1>{title}</h1>

//         <label>아이디:</label>
//         <input className="input"></input>
//         <br />
//         <label>비밀번호:</label>
//         <input className="password"></input>
//       </div>
//       <div className="container">
//         <div className="body body1"></div>
//         <div className="body body2"></div>
//         <div className="body body3"></div>
//         <div className="body body4"></div>
//         <div className="body body5"></div>
//         <div className="body body6"></div>
//         <div className="body body7"></div>
//       </div> */}

//       {/* <Practice /> */}

//       <ClassComponent name="홍길동" age="0" />
//       <ClassComponent name="홍길동" age="0" />
//       <ClassComponent name="홍길동" age="0" />
//       {/* <ClassComponent />
//       <FunctionComponent />
//       <FunctionComponent /> */}
//     </>
//   );
// }

// export default App;

import ClassComponent from "./ClassComponent";
import ClassPractice from "./Classpractice";
import FunctionComponent from "./FunctionComponent";
import Functionpractice from "./Functionpractice";
import Hicomponent from "./Hicomponent";
function App() {
  const test = () => {
    // console.log("콘솔체크");
  };
  return (
    <>
      {/* <ClassComponent name={"홍길동"} age={13} func={test} /> */}
      {/* <ClassComponent name="성춘향" age="11" /> */}
      {/* <ClassComponent /> */}
      {/* <FunctionComponent name="둘리" age="300" />  */}
      {/* <FunctionComponent /> */}
      <Hicomponent />
      {/* <ClassPractice />
      <Functionpractice /> */}
    </>
  );
}
export default App;
