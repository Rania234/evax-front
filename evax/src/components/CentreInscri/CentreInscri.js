import React from 'react'
import "./CentreInscri.css";
import { Button} from 'antd';
function CentreInscri () {
  return (
    <div className="choicePage">
        <div className="choiceButton">
            <h2> Inscription</h2>
            <div style={{margin:"auto"}}>
                <Button className="chBtn">Citoyen possedant une CIN </Button>
                <Button className="chBtn">Citoyen ne possedant pas une CIN </Button>
             
            </div>
        </div>
        
        
    </div>
)
}

export default CentreInscri
