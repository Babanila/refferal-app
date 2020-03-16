import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import LinkList from "../components/LinkLists";
import CreateLink from "../components/CreateLinks";
import Login from "../components/Login";
import AccountDetail from "../components/AccountDetails";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div style={{ marginTop: "6em" }}>
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/account" component={AccountDetail} />
          <Route exact path="/create-referral" component={CreateLink} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
