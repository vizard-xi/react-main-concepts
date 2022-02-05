import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import IntroductingJSX from './components/Introducing JSX';
import ComponentsAndProps from './components/Components and Props';
import StateAndLifecycle from './components/State and Lifecycle';
import HandlingEvents from './components/Handling Events';
import ConditionalRendering from './components/Conditional Rendering';
import Forms from './components/Forms';

ReactDOM.render(
  <React.StrictMode>
    <IntroductingJSX/>
    <ComponentsAndProps/>
    <StateAndLifecycle/>
    <HandlingEvents/>
    <ConditionalRendering/>
    <Forms/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
