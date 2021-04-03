import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  let postsElements = props.data.map((post) => (
    <Post message={post.text} likeCounts={post.likeCounts} />
  ));

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
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPost;
