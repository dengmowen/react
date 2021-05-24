import React, { Component, Fragment } from "react";
import {
  Route,
  Switch,
  Link,
  Redirect,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import NestedIndex from "./NestedIndex";
import VideoIndex from "./Video";
import WorkPlace from "./WorkPlace";
import "./../../style/nested.css";
function NestRouter() {
  let routeConfig = [
    {
      id: 1,
      path: "/nested/home",
      title: "博客首页",
      exact: true,
      component: NestedIndex,
    },
    {
      id: 2,
      path: "/nested/video",
      title: "视频教程",
      exact: false,
      component: VideoIndex,
    },
    {
      id: 3,
      path: "/nested/workPlace",
      title: "职场技能",
      exact: false,
      component: WorkPlace,
    },
  ];
  return (
    <Route>
      <div className="mainDiv">
        <div className="leftNav">
          <h3>一级导航</h3>
          {/* <ul>
            <li>
              <Link to="/nested/home">博客首页</Link>
            </li>
            <li>
              <Link to="/nested/video">视频教程</Link>
            </li>
            <li>
              <Link to="/nested/workPlace">职场技能</Link>
            </li>
          </ul> */}
          <ul>
            {routeConfig.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.path} exact={item.exact}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rightMain">
          {/* <Route path="/nested/home" exact component={NestedIndex} />
          <Route path="/nested/video" component={VideoIndex} />
          <Route path="/nested/workPlace" component={WorkPlace} /> */}
          {routeConfig.map((item) => {
            return (
              <Route
                key={item.id}
                path={item.path}
                exact={item.exact}
                component={item.component}
              />
            );
          })}
        </div>
      </div>
    </Route>
  );
}
class Nest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.history.push("/nested/home");
  }
  render() {
    return (
      <div>
        <h2>我是Nest-嵌套路由功能</h2>
        <NestRouter></NestRouter>
      </div>
    );
  }
}

export default Nest;
