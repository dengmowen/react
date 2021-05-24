import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ReactPage from "./video/ReactPage";
import VuePage from "./video/VuePage";
import FlutterPage from "./video/Flutter";

function video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/nested/video/reactPage">React教程</Link>
          </li>
          <li>
            <Link to="/nested/video/vuePage">Vue教程</Link>
          </li>
          <li>
            <Link to="/nested/video/flutterPage">Flutter教程</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h3>视频教程</h3>
          <Route path="/nested/video/reactPage" component={ReactPage}></Route>
          <Route path="/nested/video/vuePage" component={VuePage}></Route>
          <Route path="/nested/video/flutterPage" component={FlutterPage}></Route>
        </div>
      </div>
    </div>
  );
}

export default video;
