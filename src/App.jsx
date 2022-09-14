import {
  React, BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
