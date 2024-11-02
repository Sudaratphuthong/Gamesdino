import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Dino from "./components/Dino/Dino";
import LoginRegister from "./components/login/login"
function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/dinogame" element={<Dino />} />
       </Routes>
    </>

  );
}

export default App;
