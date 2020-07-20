import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import GetAllArticles from './components/articles/getAllArticles.js';
// import AllArticles from './components/articles/allArticles.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(<NavBar />, document.getElementById('navBar'));

// ReactDOM.render(<GetAllArticles />, document.getElementById('getArticles'));
// ReactDOM.render(<AllArticles />, document.getElementById('articles'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
