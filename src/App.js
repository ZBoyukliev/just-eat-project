import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <Header/>
    <div id="main-bx">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
