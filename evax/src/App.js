import React from "react";
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Banner from "./components/Banner/Banner";
import CentreInscri from "./components/CentreInscri/CentreInscri";
import InscriSteps from "./components/CentreInscri/InscriSteps/InscriSteps";
import LoginCentre from './Page/LoginCentre/LoginCentre';
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div className="App">

{/*       
      <Banner /> */}
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
