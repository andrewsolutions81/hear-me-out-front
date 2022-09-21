import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
