import './App.css';
import Navbar from './components/Navbar';
import Post from './pages/Post/Post';
import Feed from './pages/Feed/Feed';

function App() {
  return (
    <div className="app-body">
      <Navbar/>
      <Post/>
      <Feed/>
    </div>
  );
}

export default App;
