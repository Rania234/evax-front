
import React from 'react'
import CentreInscri from '../../components/CentreInscri/CentreInscri';
// import Inscri from '../../components/CentreInscri/Inscription/Inscri';
import InscriSteps from '../../components/CentreInscri/InscriSteps/InscriSteps';
// import Navbar from '../../components/Navbar/Navbar';

function Inscription() {
    return (
        <div className="inscri">
            {/* <Navbar/> */}
            <div className="contentInscri">
            
                <InscriSteps/>
            </div>
            
        </div>
    )
}

export default Inscription