import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="content-wrapper">
          <Navbar />
          <div className="app-wrapper-content">
            <Route
              path="/profile"
              render={() => (
                <Profile
                  profilePage={props.appState.profilePage}
                  addPost={props.addPost}
                  typing={props.typing}
                />
              )}
            />
            <Route
              path="/dialogs"
              render={() => (
                <Dialogs messagePage={props.appState.messagePage} />
              )}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
