import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// const element = <h1>Hello, world</h1>;


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function FormattedDate(props) {
  return  <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

// 状态测试
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
      console.log("componentDidMount ...start");
      this.timeID = setInterval(
        ()=> this.tick(),
        1000
      );
       console.log("componentDidMount ...end");
  }

  componentWillUnmount() {
      console.log("componentWillUnmount ...");
      clearInterval(this.timeID)
  }

  tick() {
  	this.setState({
  		date: new Date()
  	});
  }

  // 采用组建格式化
  render() {
    return (
      <div>
        <h1>this is my first clock react app!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}




const element = <FormattedDate />;
  
ReactDOM.render(element, document.getElementById('root'));


