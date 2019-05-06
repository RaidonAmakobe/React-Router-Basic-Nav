import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <a href="to">Home</a>
        </div>
        <div>
          <a href="to">About</a>
        </div>
        <div>
          <a href="to">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
