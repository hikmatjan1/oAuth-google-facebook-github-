import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import './App.css';

function App() {
  const user = true; //token

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
