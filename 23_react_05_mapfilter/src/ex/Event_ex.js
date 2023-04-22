import { useState } from "react";

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
