import logo from './logo.svg';
import './App.css';
import Contact from './pages/Contact';
import Nav from './pages/Nav';
import History from './pages/History';
import About from './pages/About';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Siswa from './pages/Siswa';
import Menu from './pages/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/history' element={<History/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/siswa' element={<Siswa/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/footer' element={<Footer/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
