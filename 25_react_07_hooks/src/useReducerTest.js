import { useReducer } from "react";

const reducer = (prevNumber, action) => {
  // prevNumber: 현재 state
  // action: dispatch 에서 인자로 받고 있는 현재 액션 값

  switch (action) {
    case "INCREMENT":
      return prevNumber + 1;
    //   return { value: prevNumber.value + 1 };
    case "DECREMENT":
      return prevNumber - 1;
    //   return { value: prevNumber.value - 1 };
    case "RESET":
      return 7;
    //   return { value: 7 }
    default:
      return prevNumber;
    //   return { value: prevNumber.value };
  }
};

const UseReducer = () => {
  const [number, dispatch] = useReducer(reducer, 7);
  //   const [number, dispatch] = useReducer(reducer, { value: 7 });

  const increment = () => {
    dispatch("INCREMENT");
    // dispatch({ type: "INCREMENT"});
  };
  const decrement = () => {
    dispatch("DECREMENT");
    // dispatch({ type: "DECREMENT"});
  };
  const reset = () => {
    dispatch("RESET");
    // dispatch({ type: "RESET"});
  };

  return (
    <>
      <h1>useReducer</h1>
      <h2>{number}</h2>
      {/* <h2>{number.value}</h2> */}

      <button onClick={increment}>plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default UseReducer;
