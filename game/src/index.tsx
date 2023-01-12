import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const waitTime = process.env.NODE_ENV === 'production' ? 6000 : 0;

window.setTimeout(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}, waitTime)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
