// Fragment 碎片类似template
import React, { Component, Fragment } from "react";
import "./../../style/style.css";
import ListItem from "./ListItem";
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["jsx", "react"]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addList = this.addList.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  // componentWillMount(){
  //   console.log('componentWillMount组件挂载到页面');
  // }
  // componentDidMount(){
  //   console.log('componentDidMount组件挂载完成');
  // }
  // componentDidCatch(){
  //   console.log('componentDidCatch组件销毁完成');
  // }
  // shouldComponentUpdate(){
  //   console.log('1-shouldComponentUpdate=>');
  //   return true;
  // }
  // componentWillUpdate(){
  //   console.log('2-componentWillUpdate=>');
  // }
  // componentDidUpdate(){
  //   console.log('4-componentDidUpdate组件更新完成');
  // }
  // componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps=>');
  // }
  render() {
    // console.log('3-render==>');
    return (
      <Fragment>
        {/* 第一次写注释 */}
        <div>
          <label htmlFor="test">增加服务:</label>
          <input
            id="test"
            value={this.state.inputValue}
            onChange={this.inputChange}
            placeholder="请输入选项"
            className="borderYellow"
            ref={(input=>{
              this.input = input
            })}
          />
          <button onClick={this.addList}>增加</button>
        </div>
        <ul ref={(ul=>{
          this.ul = ul
        })}>
          {this.state.list.map((item, index) => {
            return (
              // <li
              //   onClick={this.deleteItem.bind(this, index)}
              //   key={index}
              //   dangerouslySetInnerHTML={{ __html: item }}
              // >
              //   {/* {item} */}
              // </li>
              <ListItem
                key={index}
                content={item}
                index={index}
                deleteItem={this.deleteItem}
              ></ListItem>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  // 键盘改变事件
  inputChange(e) {
    // console.log('this--', this);
    // console.log(e.target.value);
    this.setState({
      inputValue: this.input.value
    });
  }
  addList() {
    if (!this.state.inputValue) {
      return;
    }
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    },()=>{
         console.log(this.ul,this.ul.querySelectorAll('li').length);
    });
    // *** 坑 setState异步加载
    // console.log(this.ul,this.ul.querySelectorAll('li').length);
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
