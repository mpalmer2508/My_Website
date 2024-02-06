import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './view/style.css';
import Home from './view/index';
import Footer from './view/footer';
import Header from './view/header';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='main'>
      <Header />
      <Home />
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
