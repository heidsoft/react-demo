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
  return <h1>Hello, {props.name}</h1>;
}

function Jake() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}


function tick() {
  const element = <Jake />;

  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

// ReactDOM.render(element, document.getElementById('root'));

