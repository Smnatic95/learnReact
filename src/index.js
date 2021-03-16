import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Clock(props) {
  return(
          <div>
            <h1>
              现在的时间是{props.date.toLocaleTimeString()}
            </h1>
            <h2>这是函数组件</h2>
          </div>
  )
}

function run() {
  ReactDOM.render(
    <Clock date={new Date()} />
    ,document.querySelector("#root")
  )
}

setInterval(run, 1000);
reportWebVitals();
