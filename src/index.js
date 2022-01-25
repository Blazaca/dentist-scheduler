import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App, Calendar } from "./components";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/calendar" element={<App />}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
          {/* <Route path="/" element={Wrapper goes here probably app}/> */}
          {/* Waiting to build a proper wrapper/shell */}