import { Application } from 'game/main/application';
import { getLeaderBoard } from 'models/LeaderBoard';
import { User } from 'models/types';
import { getUser } from 'models/Users';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const app = new Application()
window.app = app;

const user = getUser();
const leaderboard = getLeaderBoard();


Promise.all([user, leaderboard]).then(([user, leaderboard]) => {
  root.render(
    <React.StrictMode>
      <App userData={user} leaderBoardData={leaderboard} />
    </React.StrictMode>
  );
})



window.addEventListener('blur', () => {
  app.pause();
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
