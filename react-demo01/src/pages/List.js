import React, { Component } from 'react';



class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }
  render() { 
    return (<div>
      <h2>测试page页面-list</h2>
      <h3>页面接收参数:--{this.state.id}</h3>
    </div> );
  }
  componentDidMount(){
    console.log(this.props);
    const tempId = this.props.match.params.id;
    this.setState({id: tempId})
  }
}
 
export default List;