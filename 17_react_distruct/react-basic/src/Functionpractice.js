import PropTypes from "prop-types";
import { useState } from "react";

function Functionpractice() {
  const [counter, setCounter] = useState(0);

  // console.log(counter);
  //console.log(props);
  const Increase = () => {
    setCounter(counter + 1);
    console.log("클릭되었습니다");
  };

  const Decreass = () => {
    setCounter(counter - 2);
  };

  return (
    <div>
      <h1>두 번째 문제</h1>
      {/* <h5>{name}</h5>
      <h5>{age}</h5> */}
      <h5>{counter}</h5>
      <button onClick={Increase}>증가</button>
      <button onClick={Decreass}>감수</button>
    </div>
  );
}

// FunctionComponent.defaultProps = {
//   name: "홍의채",
//   age: "11",
// };

// FunctionComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.string,
// };

// const FunctionComponent = () => {}

export default Functionpractice;
