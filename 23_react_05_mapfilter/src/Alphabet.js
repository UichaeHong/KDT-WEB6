// import { useState } from "react";

// const Alphabet = () => {
//   const [alphabet, setAlphabet] = useState(["a", "p", "p", "l", "e"]);

//   console.log(alphabet); // ['a', 'p', 'p', 'l', 'e']

//   return (
//     <>
//       <ol>
//         {alphabet.map((value, idx) => (
//           <li key={idx}>{value}</li>
//         ))}
//       </ol>
//     </>
//   );
// };
// export default Alphabet;

// // ver2
// const Alphabet = () => {
//   // alphabet state: 리스트에 대한 상태
//   const [alphabet, setAlphabet] = "useState"([
//     { id: 1, alpha: "a" },
//     { id: 2, alpha: "p" },
//     { id: 3, alpha: "p" },
//     { id: 4, alpha: "l" },
//     { id: 5, alpha: "e" },
//   ]);
//   // inputAlpha state: input 에 넣는 값에 대한 상태
//   const [inputAlpha, setInputAlpha] = "useState"("");

//   const addAlpha = () => {
//     // 빈 값 입력시 추가되지 않도록 하기
//     // 공백만 입력되더라도 추가 x
//     if (inputAlpha.trim().length === 0) {
//       return;
//     }
//     // concat(): 인자로 주어진 값을 기존 배열에 합쳐서 새로운 배열을 반환
//     const newAlphabet = alphabet.concat({
//       id: alphabet.length + 1,
//       alpha: inputAlpha,
//     });
//     setAlphabet(newAlphabet); // 리스트 상태 업데이트
//   };

//   const deleteAlpha = (id) => {
//     // filter()
//     // 콜백함수의 테스트를 통과하는 모든 요소를 모아서 "새로운 배열" 반환
//     // true 요소 유지, false 요소 버림
//     // => alphabet state에서 매개변수로 받아오는 id와
//     // 배열 각 원소의 id 값이 같은 경우 빼고 나머지를 모두 새로운 배열에 저장

//     const newAlpha = alphabet.filter((obj) => obj.id !== id); // 더블클릭 했을 때 해당 id를 제외한 나머지만 저장
//     setAlphabet(newAlpha);
//   };

//   const enterKey = (e) => {
//     if (e.key === "Enter") addAlpha();
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={inputAlpha}
//         onChange={(e) => setInputAlpha(e.target.value)} // onChange를 사용하지 않으면 input값 입력이 안됨
//         onKeyDown={(e) => enterKey(e)}
//       />
//       <button onClick={addAlpha}>추가</button>
//       <ol>
//         {alphabet.map((obj) => (
//           <li key={obj.id} onDoubleClick={() => deleteAlpha(obj.id)}>
//             {obj.alpha}
//           </li> // id마다 고유의 key값을 해야 됨
//         ))}
//       </ol>
//     </>
//   );
// };

// export default Alphabet;
// import { useState } from "react";

// function Alphabet() {
//   const [alphabet, setAlphabet] = useState([
//     { id: "코디", email: "codi@gmail.com" },
//     { id: "윤소희", email: "gg@gmail.com" },
//   ]);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const addAlpha = () => {
//     const trimedName = name.trim();
//     const trimedEmail = email.trim();
//     if (trimedName === "" || trimedEmail == "") return;

//     const newAlphabet = alphabet.concat({
//       // 기존 배열에서 추가하기
//       id: name,
//       email: email,
//     });
//     setAlphabet(newAlphabet);
//     setName("");
//     setEmail("");
//   };
//   const deleteAlpha = (id) => {
//     const newAlphabet = alphabet.filter((alpha) => {
//       return alpha.id != id;
//     });
//     setAlphabet(newAlphabet);
//   };
//   const enter = (e) => {
//     if (e.key == "Enter") {
//       addAlpha();
//     }
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="이름"
//         autoFocus
//       />
//       <input
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="이메일"
//         onKeyDown={enter}
//       />
//       <button onClick={addAlpha}>등록</button>

//       <ul>
//         {alphabet.map((el) => {
//           return (
//             <li key={el.id} onDoubleClick={() => deleteAlpha(el.id)}>
//               {el.id}: {el.email}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default Alphabet;

import { useRef } from "react";

const FunctionRef = () => {
  const inputRef = useRef();

  const click = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={click}>버튼</button>
    </>
  );
};

export default FunctionRef;
