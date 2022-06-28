import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import BlogList from './BlogList';
import Blog from './Blog';


function App() {
  return (
    <div>
        <Routes>
        <Route index element={
          <BlogList />
        }
        />
        <Route path="/blog/:blogId" element={<Blog />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default App;
