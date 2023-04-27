import { useParams } from "react-router-dom";

const ProbList = (props) => {
  console.log(Probs);
  const { Probs } = props;

  return (
    <>
      <div>
        {Probs.map((product) => {
          return <ProbList key={product.thumbnailUrl} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProbList;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const getPosts = async () => {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   setPosts(res.data.slice(0, 10)); // 100개 중 10개만 가져오기
// };

// useEffect(() => {
//   // [after]
//   getPosts();
// }, []);
// return (
//   <div className="PostList">
//     <header>📨 Post List</header>
//     {/* posts state의 길이에 따라 보여주는 정보 달리하기 (힌트: 삼항 연산자) */}
//     {/* posts state 길이가 0 이라면 데이터를 불러오는 중이므로 loading 메세지 */}
//     {/* posts state 길이가 0 이 아니라면 데이터를 불러왔으므로 PostItem 컴포넌트 반복 */}
//     {posts.length === 0 ? (
//       <h1>loading...</h1>
//     ) : (
//       posts.map(
//         (
//           obj // map 속성을 사용할 땐 key 값 입력해야 됨
//         ) => (
//           <div className="PostItem">
//             <div key={obj.id}>
//               <span className="id">No. {obj.id}</span>
//               <span className="title">- {obj.title}</span>
//             </div>
//             <p className="body">{obj.body}</p>
//           </div>
//         )
//       )
//     )}
//   </div>
// );

// export default PostList;
