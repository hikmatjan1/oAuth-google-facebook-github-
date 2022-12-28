import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const user = true; //token

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
