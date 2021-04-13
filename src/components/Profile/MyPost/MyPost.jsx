import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  let postsElements = props.data.map((post) => (
    <Post message={post.text} likeCounts={post.likeCounts} />
  ));

  let newPostItem = React.createRef();

  let sendPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostItem.current.value;
    props.typing(text);
  };

  return (
    <div className={s.mypost}>
      <h3>mypost</h3>
      <div>
        <div>
          <textarea
            rows="8"
            cols="85"
            ref={newPostItem}
            onChange={onPostChange}
            value={props.typingText}
          ></textarea>
        </div>
        <div>
          <button onClick={sendPost}>Add post</button>
        </div>
      </div>
      <div>{postsElements}</div>
    </div>
  );
};

export default MyPost;
