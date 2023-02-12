import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Category from './pages/List/category/Category';
import { Routes, Route } from "react-router-dom";
import Book from './pages/List/book/Book';
import Lesson from './pages/List/lesson/Lesson';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/list/categories" element={<Category />} />
          <Route path="/list/books" element={<Book />} />
          <Route path="/list/lessons" element={<Lesson />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
