import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import { MyContextProvider } from './context/Context'
import { useHomeStyles } from './components/Home.styles'
import ContactUs from "./components/servicItem/ContactUs";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";


function App() {
  
  const styles = useHomeStyles();

  return (
    <MyContextProvider>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/services"} element={<Services />}></Route>
        <Route path={"/contactus"} element={<ContactUs />}></Route>
        <Route path={"/aboutus"} element={<AboutUs />}></Route>
        <Route path={"/portfolio"} element={<Portfolio />}></Route>
      </Routes>
    </MyContextProvider>
  );
}

export default App;
