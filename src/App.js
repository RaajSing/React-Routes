import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';
import Default from './components/Default/Default';
import Header from './components/Header/Header';
import FriendDetail from './components/Friend-Detail/Friend-Detail';
import Posts from './components/Posts/posts';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="Friends" element={<Friends></Friends>}></Route>
        <Route path="/Friend/:FriendId" element={<FriendDetail></FriendDetail>}></Route> {/* Vekhappa */}
        <Route path="/Posts" element={<Posts></Posts>}></Route>
        <Route path="About" element={<About></About>}></Route>
        <Route path="*" element={<Default></Default>}></Route>
      </Routes>
    </div>
  );
}

export default App;
