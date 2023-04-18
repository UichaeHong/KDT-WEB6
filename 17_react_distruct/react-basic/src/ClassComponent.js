import React from "react";
//import { Component } from 'react';
import PropTypes from "prop-types";
class ClassComponent extends React.Component {
  //클래스형 컴포넌트 render() 함수 필수
  render() {
    // console.log(this.props);
    // this.props = { name: "홍길동", age: "13" };
    // const { name, age } = this.props;
    const name = "태리";
    const animal = "강아지";
    return (
      <div>
        <div>
          이것은 div입니다
          <h3>이것은 div 안에 있는 h3태그입니다</h3>
        </div>
        <div>제 반려동물의 이름은 {name}</div>
        <div>
          {name}은 {animal}입니다
        </div>
      </div>
    );
  }
}
// ClassComponent.defaultProps = {
//   name: "abc",
//   age: "11",
// };

// ClassComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.string,
// };
export default ClassComponent;
