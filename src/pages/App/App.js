// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { getUser } from '../../utilities/users-service';
import Home from '../Home';
import { Routes, Route } from 'react-router-dom'
import SignUpPage from '../Signup/SignUpPage';
import Login from '../Login/LoginPage';
import NewPage from '../New/NewPage';
import Projects from '../ProjectsIndex/Projects';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      
      {
       
        // user ?
          <>
        <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/signup" element={<SignUpPage  setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/projects" element={<Projects user={user} setUser={setUser}/>}/>
          <Route path="/projects/new" element={<NewPage user={user} setuser={setUser}/>}/>
                 
            
            </Routes>
          </>
          // :
          // <Home / >
          
          
          
      }
      
      
    </main>
  );
}

export default App;
