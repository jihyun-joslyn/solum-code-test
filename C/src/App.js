import { useState } from 'react';
import './App.css';
import { Container } from '@mui/material';
import LoginForm from './section/LoginForm';
import LoginSuccess from './section/LoginSuccess';

function App() {
  const [userEmail, setUserEmail] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  function showLoginResults(isValidUser, uEmail) {
    if (isValidUser) {
      setIsLogin(true);
      setUserEmail(uEmail);
    }
  }

  function handleLogout() {
    setIsLogin(false);
  }

  return (
    <div className="App">
      <Container maxWidth="lg" className='app-content'>
        {!isLogin ?
          (<LoginForm showLoginResults={showLoginResults} />) :
          (<LoginSuccess handleLogout={handleLogout} email={userEmail} />)}
      </Container>
    </div>
  );
}

export default App;
