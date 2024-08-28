import { useSelector } from 'react-redux';
import './App.css';
import PostList from './components/posts/PostList';
import PostForm from './components/posts/PostForm';
import Login from './components/Login';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <h1>My Blog</h1>
      {isAuthenticated ? (
        <>
          <PostList />
          <PostForm />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
