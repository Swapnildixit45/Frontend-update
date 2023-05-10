import Home from "./Home";
import Login from "./Login";
import RegistrationForm from "./RegistrationForm";
import { Routes,Route } from "react-router-dom";
import Electronics from "./Products/Electronics";
import Accessories from "./Products/Accessories";
import Mens from "./Products/Mens";
import Women from "./Products/Women";
import Jewellery from "./Products/Jewellery";
import Cosmetics from "./Products/Cosmetics";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<RegistrationForm/>}/>
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="/accessories" element={<Accessories/>}/>
        <Route path="/mensfashion" element={<Mens/>}/>
        <Route path="/womenfashion" element={<Women/>}/>
        <Route path="/jewellery" element={<Jewellery/>}/>
        <Route path="/cosmetics" element={<Cosmetics/>}/>
      </Routes>
    </div>
  );
}

export default App;
