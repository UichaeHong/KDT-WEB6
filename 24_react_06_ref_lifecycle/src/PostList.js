import { useEffect, useState } from "react";
import axios from "axios";

// 임시 데이터 (backend 서버에서 받아왔다고 가정하는 데이터)
const fakePosts = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
  },
  {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
  },
  {
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque",
  },
  {
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
  },
  {
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
  },
  {
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
  },
  {
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
  },
  {
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error",
  },
];

const PostList = () => {
  // TODO: 임시 데이터 (fakePosts)를 저장할 배열 posts state
  // 초기 값은 빈 배열
  const [posts, setPosts] = useState([]);

  // TODO: 해당 컴포넌트가 "mount" 되었을 때
  // posts state에 fakePosts 데이터를 설정하기
  // 단, setTimeout()을 이용해 2초 후 posts state에 저장한다.

  // [before]
  // 방법 1
  // const getPosts = () => {
  //   setPosts(fakePosts);
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getPosts();
  //   }, 2000);
  // }, []); // 의존성 배열

  // 방법 2
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPosts(fakePosts);
  //   }, 2000);
  // }, []); // 의존성 배열

  // [after] axios 를 활용한 데이터 불러오기
  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data.slice(0, 10)); // 100개 중 10개만 가져오기
  };

  useEffect(() => {
    // [after]
    getPosts();
  }, []);
  return (
    <div className="PostList">
      <header>📨 Post List</header>
      {/* posts state의 길이에 따라 보여주는 정보 달리하기 (힌트: 삼항 연산자) */}
      {/* posts state 길이가 0 이라면 데이터를 불러오는 중이므로 loading 메세지 */}
      {/* posts state 길이가 0 이 아니라면 데이터를 불러왔으므로 PostItem 컴포넌트 반복 */}
      {posts.length === 0 ? (
        <h1>loading...</h1>
      ) : (
        posts.map(
          (
            obj // map 속성을 사용할 땐 key 값 입력해야 됨
          ) => (
            <div className="PostItem">
              <div key={obj.id}>
                <span className="id">No. {obj.id}</span>
                <span className="title">- {obj.title}</span>
              </div>
              <p className="body">{obj.body}</p>
            </div>
          )
        )
      )}
    </div>
  );
};

export default PostList;

// return 안에 있는 코드 간단하게 만들어보기

// const dataLoading = () => {
//   return <h2>Loading...</h2>;
// };

// const dataLoaded = posts.map((post) => {
//   return <PostItem post={post} key={post.id} />;
// });

// return (
//   <div className="PostList">
//     <header>📨 Post List</header>
//     {/* posts state의 길이에 따라 보여주는 정보 달리하기 (힌트: 삼항 연산자) */}
//     {/* posts state 길이가 0 이라면 데이터를 불러오는 중이므로 loading 메세지 */}
//     {/* posts state 길이가 0 이 아니라면 데이터를 불러왔으므로 PostItem 컴포넌트 반복 */}
//     {posts.length > 0 ? dataLoaded : dataLoading()}
//   </div>
// );
