import PropTypes from "prop-types";
import { useState } from "react";

function FunctionComponent() {
  const [counter, setCounter] = useState(0);

  // console.log(counter);
  //console.log(props);
  const onClick = () => {
    setCounter(counter + 1);
    console.log("클릭되었습니다");
  };

  return (
    <div>
      <h1>Hello World, Function Component</h1>
      {/* <h5>{name}</h5>
      <h5>{age}</h5> */}
      <h5>{counter}</h5>
      <button onClick={onClick}>숫자업</button>
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

export default FunctionComponent;
