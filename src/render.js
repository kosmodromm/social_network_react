import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, typing } from "./redux/state.js";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App appState={state} addPost={addPost} typing={typing} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
