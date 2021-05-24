import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Money from "./workPlace/Money";
import GetUp from "./workPlace/GetUp";

function video() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/nested/workPlace/money">加薪秘籍</Link>
          </li>
          <li>
            <Link to="/nested/workPlace/getUp">早起方法</Link>
          </li>
        </ul>
      </div>
      <div className="videoContent">
        <div>
          <h3>职场软技能</h3>
          <Route path="/nested/workPlace/money" component={Money}></Route>
          <Route path="/nested/workPlace/getUp" component={GetUp}></Route>
        </div>
      </div>
    </div>
  );
}

export default video;
