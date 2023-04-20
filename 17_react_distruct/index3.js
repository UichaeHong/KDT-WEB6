// 단축평가 ||(논리합) , &&(논리곱)

const a = 20;
const b = 10;

// 논리곱은 조건식일 때
a > b && console.log("a가 큽니다"); // true일 때만 실행

// 논리합
function test(name) {
  const obj = {
    a: name || "기본이름",
  };
  console.log(obj);
}
test(); // 기본값 출력
test("홍길동");
