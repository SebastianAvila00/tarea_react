import './App.css';
import { Routes, Route } from "react-router-dom"

import Navbar from './HeaderAndFooter/Navbar';
import Footer from './HeaderAndFooter/Footer';

import HomePage from './Pages/HomePage';
import MasterPage from './Pages/MasterPage';
import DetailsPage from './Pages/DetailsPage';



function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Master' element={<MasterPage />} />
        <Route path='/user/:id' element={<DetailsPage/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
