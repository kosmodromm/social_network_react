import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://wallbox.ru/resize/1680x1050/wallpapers/main2/201730/1501360488597cf168ba7d48.29275283.jpg" />
      {props.message}
      <div>
        <span>{props.likeCounts} like</span>
      </div>
    </div>
  );
};

export default Post;
