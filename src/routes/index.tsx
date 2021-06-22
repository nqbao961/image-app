import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "../views/HomePage";
import { ImageDetailPage } from "../views/ImageDetailPage";

function IndexRouter() {
  // Set a same-site cookie for first-party contexts
  document.cookie = "cookie1=value1; SameSite=Lax";
  // Set a cross-site cookie for third-party contexts
  document.cookie = "cookie2=value2; SameSite=None; Secure";
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/:id" component={ImageDetailPage} />
      </Switch>
    </Router>
  );
}

export default IndexRouter;
