import React, { Component } from 'react';
class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isShow: true
     }
     this.handleChange=this.handleChange.bind(this);
  }
  render() { 
    return (
      <div>
        <div className={this.state.isShow? 'show':'hide'}>Boss级人物-孙悟空</div>
    <button onClick={this.handleChange}>{this.state.isShow ? '隐藏': '召唤'}Boss</button>
      </div>
    );
  }
  handleChange(){
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
 
export default Boss;