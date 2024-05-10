// App.js
import React, { useState } from 'react';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Resume from './Components/LoginSignup/Resume'; // Import Resume component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Update login state after successful login
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginSignup onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Resume />
      )}
    </div>
  );
}

export default App;

