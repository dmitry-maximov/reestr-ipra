import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Lauot from './components/Lauot';
import './styles/App.css';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Lauot>
          <AppRouter />
        </Lauot>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
