import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/get-zen_doc/1875939/pub_5fe9c4e2dba1eb4af8f51499_5fe9c7603ede826fd4e820a7/scale_1200"></img>
      </div>
      <div className={s.descriptionBlock}>ava + descr</div>
    </div>
  );
};

export default ProfileInfo;
