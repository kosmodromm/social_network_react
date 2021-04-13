import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    postsData: [
      { id: 1, text: "it's my first post!", likeCounts: 33 },
      { id: 2, text: "Hi! How are you?", likeCounts: 9 },
      { id: 3, text: "Like, share, repost!", likeCounts: 17 },
    ],
    typePost: "test2",
  },
  messagePage: {
    dialogsData: [
      { id: 1, name: "Julia" },
      { id: 2, name: "Ilya" },
      { id: 3, name: "Anton" },
      { id: 4, name: "Zhenya" },
      { id: 5, name: "Tanya" },
    ],
    messagesData: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Nice to meet you!" },
      { id: 4, message: "Long story" },
      { id: 5, message: "Yo" },
    ],
  },
};

export let addPost = () => {
  let newPost = { id: 4, text: state.profilePage.typePost, likeCounts: 0 };
  state.profilePage.postsData.push(newPost);
  state.profilePage.typePost = "";
  rerenderEntireTree(state);
};

export let typing = (text) => {
  state.profilePage.typePost = text;
  rerenderEntireTree(state);
};

export default state;
