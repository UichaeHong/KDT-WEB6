// frontend js

// socket 사용을 위해서 객체 생성
let socket = io.connect();

// 나의 닉네임
let myNick;

socket.on("connect", () => {
  console.log("⭕️ Client Socket Connected >> ", socket.id);
});

// [실습1]
// function sayHello() {
//   // clinet -> server 정보 보내기
//   // socket.emit(event, data): 데이터 "전송"
//   // => event 라는 이름으로 data 를 전송
//   socket.emit('hello', { who: 'client', msg: 'hello' });

//   // socket.on(event, callbak): 데이터 "받음"
//   // event에 대해서 정보를 받아 callback 함수 실행
//   socket.on('helloKr', (data) => {
//     const p = document.querySelector('#form-server');
//     p.textContent = `${data.who} : ${data.msg}`;
//   });
// }

// [실습3] 채팅창 입장/퇴장 안내 문구
socket.on("notice", (msg) => {
  document
    .querySelector("#chat-list")
    .insertAdjacentHTML("beforeend", `<div class="notice">${msg}</div>`);
});

// [실습3-2]
function entry() {
  console.log(document.querySelector("#nickname").value);
  socket.emit("setNick", document.querySelector("#nickname").value);
}

// 닉네임 입력창에 입력 후 enter 누르면 입장하기
function enter() {
  if (window.event.keyCode === 13) {
    console.log(document.querySelector("#nickname").value);
    socket.emit("setNick", document.querySelector("#nickname").value);
  }
}

socket.on("entrySuccess", (nick) => {
  // 1. 내 닉네임 설정
  myNick = nick;

  // 2. 닉네임 입력창 & 버튼 비활성화
  document.querySelector("#nickname").disabled = true; // 입력창 비활성화 (클릭 막기)
  document.querySelector(".entry-box > button").disabled = true; // 버튼 비활성화 (클릭 막기)

  // 3. div.chat-box 요소 보이기
  document.querySelector(".chat-box").classList.remove("d-none");
});

// [실습3-2]
// 닉네임 중복 -> alert 띄우기
socket.on("error", (msg) => {
  alert(msg);
});

// [실습3-2]
// 닉네임 리스트 객체 업데이트하는 이벤트를 받음
socket.on("updateNicks", (obj) => {
  let options = `<option value="all">전체</option>`;

  // select#nick-list 요소의 option 추가
  for (let key in obj) {
    // obj[key] : 유저가 인풋에 입력한 닉네임
    // key : 소켓 아이디
    options += `<option value="${key}">${obj[key]}</option>`;
  }
  console.log(options);

  // select 요소에 options 덮어쓰기
  document.querySelector("#nick-list").innerHTML = options;
});

// [실습4] 채팅창 메세지 전송 step1
// "send" 이벤트 전송 { 닉네임, 입력메세지 }
// enter 키 사용시 메세지 전송
// function enterKey() {
function send() {
  const data = {
    myNick: myNick,
    dm: document.querySelector("#nick-list").value,
    // => select 태그에서 선택한 option 태그의 value 값
    msg: document.querySelector("#message").value,
  };
  socket.emit("send", data);

  document.querySelector("#message").value = ""; // 인풋 초기화
}

// [실습4] 채팅창 메세지 전송 Step2
// 서버에 접속한 모든 클라이언트한테 "누가 뭐라고 말했는지" 이벤트 보내기
socket.on("newMessage", (data) => {
  console.log("socket on newMessage >> ", data); // 새 메세지 정보

  // 생성해야할 채팅 구조
  // <div class="my-chat">
  //   <div>user1: msg1</div>
  // </div>
  // <div class="other-chat">
  //   <div>user2: msg2</div>
  // </div>

  // #chat-list 요소 선택 (파란색 박스 = 메세지 상자)
  let chatList = document.querySelector("#chat-list");

  // .my-chat or .other-chat 요소 생성
  let div = document.createElement("div");

  // 가장 안쪽 div 요소 생성
  let divChat = document.createElement("div");

  // 미션!!
  // 새 메세지가 도착했는데, myNick에 저장된 현재 내 닉네임과
  // data 의 닉네임이 같다면, 내 채팅으로 보이게 (오른쪽 배치 == .my-chat)
  // data 의 닉네임이 다르다면, 상대방 채팅으로 보이게 (왼쪽 배치 == .other-chat)

  if (myNick === data.nick) {
    div.classList.add("my-chat");
  } else {
    div.classList.add("other-chat");
  }

  // [실습5] DM 기능 추가
  if (data.dm) {
    // data.dm -> '(속닥속닥)'
    div.classList.add("secret-chat");
    divChat.textContent = data.dm;
  }

  // divChat의 textContent/innerText 값을 적절히 변경
  // ex. nick : msg 형태로 보이게 했음
  // divChat.textContent = `${data.nick} : ${data.msg}`; // [실습4]
  divChat.textContent = divChat.textContent + `${data.nick} : ${data.msg}`; // [실습5]
  // dm; divChat.textContent = '(속닥속닥)' + 누가 : 메세지
  // not dm; divChat.textContent = '' + 누가 : 메세지

  // divChat 을 div 요소에 추가
  div.append(divChat);

  // div를 chatList 에 추가
  chatList.append(div);

  // (선택) 메세지가 많아져서 스크롤이 생기더라도 하단 고정
});

// text창에 메세지 입력 후 enter 누르면 전송하기
function enterkey(event) {
  if (window.event.keyCode === 13) {
    const data = {
      myNick: myNick,
      dm: document.querySelector("#nick-list").value,
      // => select 태그에서 선택한 option 태그의 value 값
      msg: document.querySelector("#message").value,
    };
    socket.emit("send", data);

    document.querySelector("#message").value = "";
  }
}

// 댓글에 좋아요 기능달기

// background color 바꾸는 버튼

// let green = document.querySelector("#modal");

let count = 0;

function green() {
  count++;
  // if (count % 2 === 0) {
  //   document.querySelector(".chat-list").style.backgroundColor = "blue";
  // }

  if (count % 2 === 1) {
    (document.querySelector(".chat-list").style.backgroundColor =
      "mediumseagreen"),
      (document.querySelector("body").style.backgroundColor = "white");
  } else {
    document.querySelector(".chat-list").style.backgroundColor = "deepskyblue";
  }
}

function white() {
  (document.querySelector(".chat-list").style.backgroundColor = "white"),
    (document.querySelector("body").style.backgroundColor = "mediumseagreen");
}

// let click = document.querySelector("#modal");

// click.onclick = function () {
//   document.querySelector("body").style.backgroundColor = "red";
// };

// click.onclick = function () {
//   document.querySelector("body").style.backgroundColor = "green";
// };

// setTimeout(function () {
//   document.querySelector("body").style.backgroundColor = "orange";
//   setTimeout(function () {
//     document.querySelector("body").style.backgroundColor = "yellow";
//     setTimeout(function () {
//       document.querySelector("body").style.backgroundColor = "green";
//       setTimeout(function () {
//         document.querySelector("body").style.backgroundColor = "blue";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
