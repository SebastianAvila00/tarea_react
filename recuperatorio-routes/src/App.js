import { Route, Routes } from "react-router-dom"
import './App.css';

//Rutes
import Index from "./Pages/Index";
import Details from "./Pages/Details";
import Cart from "./Pages/Cart";

//Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";



function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
