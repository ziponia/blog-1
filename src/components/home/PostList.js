import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostItem from "../common/PostItem";
import PostAPI from "../../api/PostAPI";

const PostList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    _getPostList1(); // 내가 약속할께... 나 기다리지말고 너 할꺼 해..
    // _getPostList2();
  }, []);

  const _getPostList1 = async () => {
    // console.log("포스트를 가져옵니다...");

    // try {
    //   const { data } = await PostAPI.list();
    //   setPosts(data);
    // } catch (e) {
    //   alert("실패했습니다.");
    // } finally {
    //   console.log("응답을 완료햇습니다.");
    //   // js-loger
    // }

    const { data } = await PostAPI.list();
    setPosts(data);

    // PostAPI.list()
    //   .then((res) => {
    //     setPosts(res.data);
    //   })
    //   .catch((err) => {
    //     alert("실패했습니다.");
    //   })
    //   .finally(() => {
    //     console.log("데이터를 가져왔습니다.");
    //   });
  };
  const _getPostList2 = async () => {
    // console.log("포스트를 가져옵니다...");
    const { data } = await PostAPI.list();
    setPosts(data);
    console.log("post2");
  };

  return (
    <PostListStyled>
      {posts.map((item) => (
        <PostItem
          key={item.idx}
          image={item.image}
          title={item.title}
          content={item.content}
        />
      ))}
    </PostListStyled>
  );
};

const PostListStyled = styled.div`
  width: 66%;
`;

export default PostList;
