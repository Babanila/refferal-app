import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import LinkList from "../components/LinkLists";
import CreateLink from "../components/CreateLinks";
import Login from "../components/Login";
import AccountDetail from "../components/AccountDetails";
import "../styles/App.css";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div style={{ marginTop: "6em" }}>
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/account" component={AccountDetail} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
