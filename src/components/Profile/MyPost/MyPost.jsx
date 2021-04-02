import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  let postsData = [
    { id: 1, text: "it's my first post!", likeCounts: 33 },
    { id: 2, text: "Hi! How are you?", likeCounts: 9 },
    { id: 3, text: "Like, share, repost!", likeCounts: 17 },
  ];

  return (
    <div className={s.mypost}>
      <h3>mypost</h3>
      <div>
        <div>
          <textarea rows="8" cols="85"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>
        <Post
          message={postsData[0].text}
          likeCounts={postsData[0].likeCounts}
        />
        <Post
          message={postsData[1].text}
          likeCounts={postsData[1].likeCounts}
        />
        <Post
          message={postsData[2].text}
          likeCounts={postsData[2].likeCounts}
        />
      </div>
    </div>
  );
};

export default MyPost;
