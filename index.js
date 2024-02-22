import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import './style.css';
import questions from "./questions.json";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App questions={questions} />
  </React.StrictMode>
);
