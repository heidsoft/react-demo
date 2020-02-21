import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// const element = <h1>Hello, world</h1>;

function Welcome(props) {
  console.log(props)
  return <h1>Hello, {props.name}</h1>;
}



function tick() {
  const element = <Welcome name="Sara" />;

  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

// ReactDOM.render(element, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
