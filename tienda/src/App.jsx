import { Route, Routes } from 'react-router-dom';
import './App.css';
// Rutas
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import NavBar from './pages/NavBar';
import Foot from './pages/Foot';
import Cart from './pages/CartPage';


function App() {
  return (
    <div className="App">

      {/*NavBar*/}
      <NavBar />
      {/*NavBar*/}

      {/* Inicio de Rutas */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='*' element={<div><h1>Not Found</h1></div>} />
      </Routes>
      {/* Fin de Rutas */}

      {/* Footer */}
      <Foot />
      {/* Footer */}
      
    </div>
  );
}

export default App;
