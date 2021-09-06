import './App.css';
import Navbar from './components/Navbar';
import Form from './pages/Post/Form';
import Feed from './pages/Feed/Feed';

function App() {
  return (
    <div className="app-body">
      <Navbar/>
      <Form/>
      <Feed/>
    </div>
  );
}

export default App;
