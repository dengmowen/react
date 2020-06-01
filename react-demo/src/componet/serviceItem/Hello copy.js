// Fragment 碎片类似template
import React, { Component, Fragment } from "react";
import "./../style/style.css";
import ListItem from "./ListItem";
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["jsx", "react"]
    };
  }
  render() {
    return (
      <Fragment>
        {/* 第一次写注释 */}
        <div>
          <label htmlFor="test">增加服务:</label>
          <input
            id="test"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
            placeholder="请输入选项"
            className="borderYellow"
          />
          <button onClick={this.addList.bind(this)}>增加</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li
                onClick={this.deleteItem.bind(this, index)}
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
              >
                {/* {item} */}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  // 键盘改变事件
  inputChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    });
  }
  addList() {
    if (!this.state.inputValue) {
      return;
    }
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }
  // 删除列表项
  deleteItem(index) {
    // console.log(index);
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}
export default Hello;
