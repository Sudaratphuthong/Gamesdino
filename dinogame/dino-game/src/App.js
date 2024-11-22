import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Dino from "./components/Dino/Dino";
import LoginRegister from "./components/login/login"
import About from "./components/about/about"
function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<LoginRegister />} />
          
          <Route path="/dino" element={<Dino />} />
          <Route path="/about" element={<About />} />
       </Routes>
    </>

  );
}

export default App;
