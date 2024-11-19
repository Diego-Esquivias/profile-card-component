import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './ProfileCard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Profile profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDwycVzCsWaZx5AaCTeqz6e8qLbt8UaQz7g&s" firstName="John" lastName="Doe" email="johndoe@example.com" socialLinks={{ github: "https://github.com/johndoe", instagram: "https://instagram.com/johndoe", facebook: "https://facebook.com/johndoe" }} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
