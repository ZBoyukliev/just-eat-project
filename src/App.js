import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Home/Header/Header';
import Footer from './components/Home/Footer/Footer';

function App() {
  return (
    <>
    <Header />
      <div id="main-bx">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
