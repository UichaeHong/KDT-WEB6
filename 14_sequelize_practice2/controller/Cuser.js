// 15_mvc_mysql_practice/controller/Cuser.js 변형
const models = require("../models");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.post_signup = (req, res) => {
  // [Before]
  //   User.post_signup(req.body, () => {
  //     res.send(true);
  //   });

  // [After 1] promise
  models.User.create({
    // sequelize 쿼리문 create 메서드
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then(() => {
    res.send(true);
  });
};
// [After 2] async / await
//   await models.User.create({  // sequelize 쿼리문 create 메서드
//     userid: req.body.userid,
//     name: req.body.name,
//     pw: req.body.pw,
//   })
//     res.end(true);
//   });
// };

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signin = (req, res) => {
  console.log(req.body);

  // [Before]
  //   User.post_signin(req.body, (result) => {
  //     console.log('Controller post_sign: ', result); // [ RowDataPacket { id: 'sean', name: 'sean', pw: '1234' } ]

  //     if (result.length > 0) {
  //       res.send(true);
  //     } else {
  //       res.send(false);
  //     }
  //   });

  // ##############################################################################
  // [After 1] promise
  models.User.findOne({
    // findOne 메서드 찾아보기
    where: {
      userid: req.body.userid, // id와 pw가 맞는지 확인
      pw: req.body.pw,
    },
  }).then((result) => {
    if (result) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

// [After 2] async / await
// exports.post_signin = async (req, res) => {
//   console.log(req.body);
//   const result = await models.User.findOne({  // findOne 메서드 찾아보기
//     where: {
//       userid: req.body.userid, // id와 pw가 맞는지 확인
//       pw: req.body.pw,
//     },
//   })
// console.log('>>>>>>' , result)

// if(result) {
//   res.send(true)
// } else {
//   res.send(false)
// }
// };

// ###################################################################################################

exports.post_profile = (req, res) => {
  console.log(req.body);

  // [Before]
  //   User.post_profile(req.body.userid, (result) => {
  //     // POST /user/profile 로그인이 성공되어야만 수행하는 요청

  //     if (result.length > 0) {
  //       // 로그인 성공; views/profile.ejs 렌더링
  //       res.render('profile', { data: result[0] });
  //     }
  //   });

  // [After 1] promise
  models.User.findOne({
    where: { userid: req.body.userid }, //
  }).then((result) => {
    console.log("post_profile >> ", result);
    // 이제 더이상 결과가 [ {} ]가 아니라 {}
    if (result) {
      // res.render('profile', { data: result[0] });
      res.render("profile", { data: result }); // 주의) [0] 인덱싱 필요 없음!
    }
  });
};

//    [After 2] async / await
// exports.post_profile = async (req, res) => {
//   console.log(req.body);
//
//   const result = await models.User.findOne({
//     where: { userid: req.body.userid },
//   })
//  console.log('>>>>>', result) // {} 성공했을 때 콘솔에 객체가 찍힘
//  if (result) {
//   res.render('profile', {data: result})
// }
//
//
// };
// ###################################################################################################

exports.edit_profile = (req, res) => {
  console.log(req.body);

  // [Before]
  //   User.edit_profile(req.body, () => {
  //     res.send('회원정보 수정 성공!');
  //   });

  // [After 1] promise
  models.User.update(
    // updata(x, y) 첫번째가 바꿀 요소, 두번째가 어떤 것으로 바꿀 것인지  profile.ejs에서 profileEdit 함수
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: { id: req.body.id },
    }
  ).then(() => {
    res.send("회원정보 수정 성공!");
  });
};
//   // [After 2] async / await
// exports.edit_profile = async (req, res) => {
//   console.log(req.body);
//
//   const result = await models.User.update(
//     {
//       userid: req.body.userid,
//       name: req.body.name,
//       pw: req.body.pw,
//     },
//     {
//       where: { id: req.body.id },
//     }
//   ).then(() => {
//     res.send("회원정보 수정 성공!");
//   });
// };
// }
// ###################################################################################################

exports.delete_profile = (req, res) => {
  console.log(req.body);

  // [Before]
  //   User.delete_profile(req.body.id, () => {
  //     // res.redirect(주소): 리다이렉트할 주소와 함께 응답 보내기!!
  //     // res.redirect('/user/signin');
  //     // res.redirect('/user');
  //     res.send(true);
  //   });

  // [After 1] promise
  models.User.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.send("회원 탈퇴 완료!!");
  });
};
//   [After 2] async / await
// exports.delete_profile = async (req, res) => {
//   console.log(req.body);
//
//   const result = await models.User.destroy({
//     where: { id: req.body.id },
//   })
//    res.end()
//   });
// };
// ###################################################################################################
