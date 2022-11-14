import React from "react";
//import pages 
import AboutUs from "./pages/AboutUs"; //section
import ContactUs from "./pages/ContactUs"; //section
import OurWork from "./pages/OurWork";  //section
import MoveDetail from "./pages/MoveDetail"; //our offline Api
//Global Styled
import GlobalStyled from "./components/GlobalStyles";
import Nav from "./components/Nav"
//import react router
import {Route,Routes,useLocation} from "react-router-dom"
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="App"> 
      <GlobalStyled/>   
      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AboutUs/>}></Route>
        <Route path="/work" element={<OurWork/>}></Route>
        <Route path="/work/:id" element={<MoveDetail/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
