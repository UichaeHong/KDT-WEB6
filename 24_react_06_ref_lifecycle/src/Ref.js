import { useState, useRef } from "react";

const Ref = () => {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [comment, setComment] = useState([
    {
      id: 1,
      writer: "민수",
      title: "안뇽",
    },
    {
      id: 2,
      writer: "지민",
      title: "하이하이",
    },
    {
      id: 3,
      writer: "희수",
      title: "멋쟁이",
    },
  ]);

  const inputRef = useRef();
  const inputRef2 = useRef();

  const checkInputValue = () => {
    // 빈값 여부 검사
    if (inputWriter.trim().length === 0) {
      inputRef.current.focus();
      return false;
    }

    if (inputTitle.trim().length === 0) {
      inputRef2.current.focus();
      return false;
    }
    return true;
  };
  const addComment = () => {
    if (!checkInputValue()) return;

    // 내가 쓴 코드
    // inputRef.current.focus();
    // inputRef2.current.focus();

    // if (inputWriter.trim().length === 0 || inputTitle.trim().length === 0) {
    //   inputRef.current.focus();
    //   return;
    // }

    // 풀이
    // if (inputWriter.trim().length === 0) {
    //   inputRef.current.focus();
    //   return false;
    // }

    // if (inputTitle.trim().length === 0) {
    //   inputRef2.current.focus();
    //   return false;
    // }

    console.log("추가 버튼 확인");

    const newData = {
      id: comment.length + 1,
      writer: inputWriter,
      title: inputTitle,
    };

    const newComment = [...comment, newData];
    setComment(newComment);

    // TODO: input 초기화
    setInputWriter("");
    setInputTitle("");
  };

  const enterKey = (e) => {
    if (e.key === "Enter") addComment();
  };

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자:</label>
        <input
          id="writer"
          type="text"
          name="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
          ref={inputRef}
        />
        <label htmlFor="title">제목:</label>
        <input
          id="title"
          type="text"
          name="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
          onKeyDown={(e) => enterKey(e)}
          ref={inputRef2}
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
          {comment.map((cmt) => {
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

export default Ref;
