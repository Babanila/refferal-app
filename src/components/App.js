import React from "react";
import { Switch, Route } from "react-router-dom";
import LinkList from "../components/LinkLists";
import CreateLink from "../components/CreateLinks";
import Header from "../components/Header";
import "../styles/App.css";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
