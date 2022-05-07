// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import NewPage from '../New/NewPage';
import Projects from '../Index/Projects';
import Details from '../Details/DetailsPage';
import Update from '../Update/Update';
import Tools from '../Index/Tools';
import NewToolPage from '../New/NewToolPage';
import ToolDetails from '../Details/ToolDetailPage';

function App() {
  const [user, setUser] = useState(getUser());

  

  return (
    <main className="App">



       { user ? 
      <>
        <Routes>
          {/* <Route path="/" element={<AuthPage />} /> */}
          <Route path="/projects" element={<Projects user={user} setUser={setUser} />} />
          <Route path="/projects/new" element={<NewPage user={user} setuser={setUser} />} />
          <Route path="/projects/:id" element={<Details user={user} setUser={setUser} />} />
          <Route path="/projects/:id/edit" element={<Update user={user} setUser={setUser} />} />
          <Route path="/tools" element={<Tools user={user} setUser={setUser} />} />
          <Route path="/tools/new" element={<NewToolPage user={user} setUser={setUser} />} />
          <Route path="/tools/:id" element={<ToolDetails user={user} setUser={setUser} />} />


          <Route path="/*" element={<Navigate to="/projects"/>}/>
        </Routes>
      </>
       :
        <AuthPage setUser={setUser} />
      } 






    </main>
  );
}

export default App;
