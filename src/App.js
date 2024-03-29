import Home from "./Home";
import Login from "./Login";
import RegistrationForm from "./RegistrationForm";
import { Routes, Route } from "react-router-dom";
import Electronics from "./Products/Electronics";
import Accessories from "./Products/Accessories";
import Mens from "./Products/Mens";
import Women from "./Products/Women";
import Jewellery from "./Products/Jewellery";
import Cosmetics from "./Products/Cosmetics";
import Profile from "./Profile";
import { CartProvider } from "./Cart/CartContext";
import Cancel from "./StripePages/Cancel"
import Success from "./StripePages/Success"
import React from "react";
import ElectronicsList from './ComparePages/CompareElectronics'
import AccessoriesList from './ComparePages/CompareAccessories'
import JewelleryList from './ComparePages/CompareJewellery'
import CosmeticsList from './ComparePages/CompareCosmetics'
import MensList from './ComparePages/CompareMen'
import WomensList from './ComparePages/CompareWomen'

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<RegistrationForm />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/mensfashion" element={<Mens />} />
          <Route path="/womenfashion" element={<Women />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/canceled" element={<Cancel />} />
          <Route path="/success" element={<Success />} />
          <Route path="/compareElectronics" element={<ElectronicsList/>}/>
          <Route path="/compareAccessories" element={<AccessoriesList/>}/>
          <Route path="/compareCosmetics" element={<CosmeticsList/>}/>
          <Route path="/compareJewellery" element={<JewelleryList/>}/>
          <Route path="/compareMen" element={<MensList/>}/>
          <Route path="/compareWomen" element={<WomensList/>}/>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
