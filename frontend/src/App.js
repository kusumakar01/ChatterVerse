import React from "react";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
import Background from "./animations/Background";
import "./App.css";

function App() {
  return (
    <Background>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
      </div>
    </Background>
  );
}

export default App;
