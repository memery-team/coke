import Login from './pages/login/Login';
import Home from './pages/home/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
