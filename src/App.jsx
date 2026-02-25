import React, { useState } from 'react';
import useDevice from './hooks/useDevice';
import MobileLogin from './mobile/pages/MobileLogin';
import MobileDashboard from './mobile/pages/MobileDashboard';
import DesktopLogin from './desktop/pages/DesktopLogin'; // Import this

function App() {
  const { isMobile } = useDevice();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const DEFAULT_CREDENTIALS = {
    username: "Cehelen16@gmail.com",
    password: "Weinerhelen"
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    // We will build DesktopDashboard next, for now let's use mobile to test
    return <MobileDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="antialiased">
      {isMobile ? (
        <MobileLogin 
          onLoginSuccess={handleLoginSuccess} 
          validUser={DEFAULT_CREDENTIALS} 
        />
      ) : (
        /* SHOW DESKTOP LOGIN ON LARGE SCREENS */
        <DesktopLogin 
          onLoginSuccess={handleLoginSuccess} 
          validUser={DEFAULT_CREDENTIALS} 
        />
      )}
    </div>
  );
}

export default App;