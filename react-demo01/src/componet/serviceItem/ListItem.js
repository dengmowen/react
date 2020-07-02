import React, { Component } from "react";
// 效验传递值
import PropTypes from "prop-types";
class ListItem extends Component {
  // state = {  }
  constructor(props) {
    super(props);
    this.sendParent = this.sendParent.bind(this);
  }
  // 1.组件第一次存在于Dom中 函数是不会被执行的。
  // 2.已经存在Dom中 函数才会被执行
  // componentWillReceiveProps() {
  //   console.log("child = componentWillReceiveProps=>");
  // }
  // componentWillUnmount() {
  //   console.log("child = componentWillUnmount=>组件将要被删除之前");
  // }
    shouldComponentUpdate(nextProps,nexState) {
    console.log('shouldComponentUpdate=>',nextProps,nexState);
    if(nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }   
  }
  render() {
    console.log('child-render==>')
    return (
      <li onClick={this.sendParent}>
        {this.props.study}
        {this.props.content}
      </li>
    );
  }
  sendParent() {
    console.log("发送给父组件--", this.props.index);
    this.props.deleteItem(this.props.index);
  }
}
console.log("PropTypes--", PropTypes);
ListItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func,
};
ListItem.defaultProps = {
  study: "Hello ",
};
export default ListItem;
