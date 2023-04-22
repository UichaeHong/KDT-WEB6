// import { useState } from "react";

// function Practice2() {
//   const [user, newUser] = useState("");
//   const [title, newTitle] = useState("");

//   function Submit() {
//     if (user.trim().length === 0 || title.trim().length === 0) return;
//   }

//   return (
//     <div>
//       <fieldset>
//         작성자:
//         <input
//           placeholder="작성자"
//           value={user}
//           onChange={(e) => newUser(e.target.value)}
//         />
//         제목:
//         <input value={title} onChange={(e) => newTitle(e.target.value)} />
//         <button onClick={Submit}>작성</button>
//       </fieldset>
//       <tr />

//       <table>
//         <tr>
//           <th>번호</th>
//           <th>제목</th>
//           <th>작성자</th>
//         </tr>
//       </table>
//     </div>
//   );
// }

// export default Practice2;

// TODO: useState 불러오기
import { useState } from "react";

const Prob2 = () => {
  const [inputWriter, setInputWriter] = useState(""); // 작성자 input state
  const [inputTitle, setInputTitle] = useState(""); // 제목 input state
  const [comment, setComment] = useState([
    {
      id: 1, // 고유한 아이디 key값
      writer: "민수",
      title: "안뇽",
    },
    {
      id: 2, // 고유한 아이디 key값
      writer: "지민",
      title: "하이하이",
    },
    {
      id: 3, // 고유한 아이디 key값
      writer: "희수",
      title: "멋쟁이",
    },
  ]); // 댓글 목록 배열 state

  const addComment = () => {
    console.log("추가 버튼 확인");
    // TODO: comment state 원소 추가
    const newData = {
      id: comment.length + 1,
      writer: inputWriter,
      title: inputTitle,
      // comment state 배열에 새로 추가할 요소
    };
    // ver1. concat()
    // const newComment = comment.concat(newData); // input에 추가한 값을 추가한 새로운 배열
    // setComment(newComment);

    // ver2. spread(...) 연산자
    const newComment = [...comment, newData];
    setComment(newComment);

    // TODO: input 초기화
    setInputWriter("");
    setInputTitle("");
  };

  const enterKey = (e) => {
    if (e.key === "Enter") addComment();
  };

  // const deleteClick = (cmt) => {
  //   const newComment = comment.filter((cmt) => cmt.id !== id);
  //   setComment(newComment);
  // };

  return (
    // html for는 리액트로 넘어오면 htmlFor로 작성해야 됨
    <div>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          id="writer"
          type="text"
          name="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          onKeyDown={(e) => enterKey(e)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: comment state 반복 */}
          {comment.map((cmt) => {
            // cmt => {id: n, writer: xxx, title: xxx}
            return (
              <tr key={cmt.id}>
                <td>{cmt.id}</td>
                <td>{cmt.title}</td>
                <td>{cmt.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Prob2;
