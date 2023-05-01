// src /store /counterReducer.js

// action type 정의
// 모듈이름/ 액션이름
const INCREAMENT = "counter/INCREAMENT";
const DECREAMENT = "counter/DECREAMENT";

// increase(), decrease()
// 컴포넌트에서 액션을 쉽게 발생시키기 위해
export const increase = () => ({ type: INCREAMENT });
export const decrease = () => ({ type: DECREAMENT });
// state 초기값 설정
const initialState = {
  number: 9,
};

// Reducer 정의 : 변화를 일으키는 함수
// dispatch가 실행됐을 때 호출되는 함수
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREAMENT:
      return {
        number: state.number + 1,
      };
    case DECREAMENT:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

// 다른 파일에서 reducer() 를 사용할 수 있도록 내보내기
export default counterReducer;
