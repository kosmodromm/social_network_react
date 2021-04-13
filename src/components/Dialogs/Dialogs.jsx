import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let messagesElements = props.messagePage.messagesData.map((msg) => (
    <Message message={msg.message} />
  ));

  let dialogsElements = props.messagePage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let newPostItem = React.createRef();

  let addPost = () => {
    let text = newPostItem.current.value;
    alert(text);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
      <div className={s.newMessage}>
        <div>
          <textarea rows="8" cols="85" ref={newPostItem}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
