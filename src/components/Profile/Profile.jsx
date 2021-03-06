import React from "react";
import s from "./Profile.module.css";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPost
        data={props.profilePage.postsData}
        typingText={props.profilePage.typePost}
        addPost={props.addPost}
        typing={props.typing}
      />
    </div>
  );
};

export default Profile;
