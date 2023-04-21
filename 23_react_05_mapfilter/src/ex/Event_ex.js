import { useState } from "react";

// function Event_ex() {
//   const [alphabet, setAlphabet] = useState([
//     { name: "코디", email: "codi@gmail.com" },
//     { name: "윤소희", email: "yoon@gmail.com" },
//   ]);
//   const [name, newName] = useState("");
//   const [email, newEmail] = useState("");

//   const addAlpha = () => {
//     if (name.trim().length === 0 || email.trim().length === 0) {
//       return;
//     }
//     const newAlphabet = alphabet.concat({
//       name: name,
//       email: name,
//     });
//     setAlphabet(newAlphabet);
//     newName("");
//     newEmail("");
//   };
//   const deleteAlpha = (name) => {
//     const newAlpha = alphabet.filter((obj) => obj.name !== name);
//     setAlphabet(newAlpha);
//   };
//   const enterKey = (e) => {
//     if (e.key === "Enter") addAlpha();
//   };

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="이름"
//         value={name}
//         onChange={(e) => newName(e.target.value)}
//         onKeyDown={(e) => enterKey(e)}
//       />
//       <input
//         type="email"
//         placeholder="이메일"
//         value={email}
//         onChange={(e) => newEmail(e.target.value)}
//       />
//       <button onClick={addAlpha}>등록</button>
//       <ol>
//         {alphabet.map((obj) => (
//           <li key={obj.name} onDoubleClick={() => deleteAlpha(obj.name)}>
//             {obj.alpha}
//           </li>
//         ))}
//       </ol>
//     </>
//   );
// }

function Event_ex() {
  const [alphabet, setAlphabet] = useState([
    { id: "코디", email: "codi@gmail.com" },
    { id: "윤소희", email: "gg@gmail.com" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addAlpha = () => {
    if (name.trim().length === 0 || email.trim().length === "0") return;

    const newAlphabet = alphabet.concat({
      id: name,
      email: email,
    });
    setAlphabet(newAlphabet);
    setName("");
    setEmail("");
  };
  const deleteAlpha = (id) => {
    const newAlphabet = alphabet.filter((alpha) => alpha.id != id);
    setAlphabet(newAlphabet);
  };
  const enter = (e) => {
    if (e.key == "Enter") addAlpha();
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
        onKeyDown={enter}
      />
      <button onClick={addAlpha}>등록</button>

      <ul>
        {alphabet.map((el) => {
          return (
            <li key={el.id} onDoubleClick={() => deleteAlpha(el.id)}>
              {el.id}: {el.email}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Event_ex;
