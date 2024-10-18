import React, { Component } from "react";
class Count extends Component {
  render() {
    if (this.props.number % 2 === 0) {
      return (
        <div>
          <h1>even:{this.props.number}</h1>
        </div>
      );
    } else {
    //   return null;
    return(
    <div>
        <h1>odd :{this.props.number}</h1>
    </div>);
    }
  }
}
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  onClick(e) {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
  render(){
    return(
        <div>
            <Count number ={this.state.count}/>
            <button onClick={this.onClick.bind(this)} >Count</button>
        </div>
    );
  }
}
export default Counter;