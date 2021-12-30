import React from "react";
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Banner from "./components/Banner/Banner";
import CentreInscri from "./components/CentreInscri/CentreInscri";
import InscriSteps from "./components/CentreInscri/InscriSteps/InscriSteps";
import LoginCentre from './Page/LoginCentre/LoginCentre';
import Navbar from './components/Navbar/Navbar'
import Inscri from "./components/CentreInscri/Inscription/Inscri";
import SecondVir from "./components/CentreInscri/Inscription/SecondVir";
function App() {
  return (
    <div className="App">
   {/* <SecondVir/> */}
     {/* <Inscri/> */}


      
      {/* <Banner /> */}
      {/* <LoginCentre/> */}
          <InscriSteps/>
          {/* <Navbar/> */}
    </div>
    //   <Router>
    //   <Routes>

    //         <Route path="/inscription" element={<LoginCentre/>}/>
            
    // </Routes>
    // </Router>
  );
}

export default App;
