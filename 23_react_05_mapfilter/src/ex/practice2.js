import { useState } from "react";

function Practice2() {
  const [user, newUser] = useState("");
  const [title, newTitle] = useState("");

  function Submit() {
    if (user.trim().length === 0 || title.trim().length === 0) return;
  }

  return (
    <div>
      <fieldset>
        작성자:
        <input
          placeholder="작성자"
          value={user}
          onChange={(e) => newUser(e.target.value)}
        />
        제목:
        <input value={title} onChange={(e) => newTitle(e.target.value)} />
        <button onClick={Submit}>작성</button>
      </fieldset>
    </div>
  );
}

export default Practice2;
