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
class App extends Component {
  render() {
    return (
     <Router>
      <div>
        Hello React
        <NavBar />
        <Route  path="/hello" component={Hello} />
      </div>
     </Router>
    );
  }
}
export default App;
