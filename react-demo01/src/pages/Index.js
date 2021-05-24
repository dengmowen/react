import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { cid: 1, title: "hello-1" },
        { cid: 2, title: "hello-2" },
        { cid: 3, title: "hello-3" },
      ],
    };
    // 编程式重定向
    // this.props.history.push('/home')
  }
  render() {
    return (
      <div>
        <h2>测试page页面</h2>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={item.cid}>
              <Link to={'/list/' + item.cid}>{item.title}</Link>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Index;
