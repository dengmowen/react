import React, { Component } from "react";
import  { Route,Switch,Link,Redirect,NavLink, BrowserRouter as Router } from 'react-router-dom';
// function tick() {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
import NavBar from './NavBar';
import Hello from "./componet/serviceItem/Hello";
import Boss from './componet/Boss';
import List from './pages/List';
import Index from './pages/Index';
import Home from './pages/Home';
import Nestd from "./pages/nested/Nested";

class App extends Component { 
  render() {
    return (
     <Router>
      <div>
        Hello React 
        <p>React Demo -----</p>
        <NavBar />
        <Route  path="/hello" exact component={Hello} />
        <Route  path="/boss" component={Boss} />
        {/* <Redirect to="/home" /> */}
        <ul>
          <li>React Router</li>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list/123">列表</Link>
          </li>
          <li>
            <Link to="/nested">路由嵌套</Link>
          </li>
        </ul>
        <Route  path="/" exact component={Index} />
        <Route  path="/list/:id" component={List} />
        <Route  path="/home"  component={Home} />
        <Route path="/nested" component={Nestd} />
      </div>
     </Router>
    );
  }
}
export default App;
