import PropTypes from "prop-types";
import { useState } from "react";

function Hicomponent() {
  const [message, setMessage] = useState("안녕하세요");
  const [bool, setBool] = useState(false);
  // console.log(counter);
  //console.log(props);

  const In = () => {
    setMessage("입장하였습니다");
    console.log("입장하였습니다");
  };
  const Out = () => {
    setMessage("퇴장하였습니다");
    console.log("퇴장하였습니다");
  };
  const Test = () => {
    setMessage("");
    console.log("초기화");
  };
  const onClick = () => {
    setBool(true);
  };
  return (
    <div>
      {bool && (
        <>
          <h5>{message}</h5>
          <button onClick={In}>입장</button>
          <button onClick={Out}>퇴장</button>
          <button onClick={Test}>초기화</button>
        </>
      )}
      <button onClick={onClick}>로그인성공</button>

      {/* <h1>안녕하세요</h1> */}
    </div>
  );
}

export default Hicomponent;
