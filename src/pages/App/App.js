// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import AuthPage from '../AuthPage/AuthPage';
import Home from '../Home';
import { Routes, Route } from 'react-router-dom'
import SignUpPage from '../Signup/SignUpPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      
      {
       
        // user ?
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
          
         
            
          </Routes>
          
          
          
      }
      
      
    </main>
  );
}

export default App;
