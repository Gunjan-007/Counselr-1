import logo from "./logo.svg";
import "./App.css";

// import MuiImageSlider from 'mui-image-slider';



import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup"
import Home from "./components/HomepageComponents/Home";
import LandingPage from "./components/HomepageComponents/LandingPage";
function App() {
  return (
    <div> 
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/landing" element={<LandingPage/>}></Route>
        
      </Routes>
      
    </div>
  );
}

export default App;
