import React,{useState} from 'react'

import { Input, Select} from 'antd';

function SecondVir() {
   


    
  const [email, setMail] = useState();
  const [password, setPassword] = useState();
  

  const handleChange = (e) => {
    e.preventDefault(); // prevent the default action
    setMail(e.target.value);
    localStorage.setItem('email', e.target.value);    
};
  
const handleChangePassword= (e) => {
    e.preventDefault(); // prevent the default action
    setMail(e.target.value);
    localStorage.setItem('password', e.target.value);  

  };
 
    return (
        <div className="formulaire">

                <h5> Adresse-mail</h5>
                <Input name="email"  onChange={handleChange} className="inputInfo"/>
                <h5> Password</h5>
                <Input name="password"  onChange={handleChangePassword} className="inputInfo"/>
                <div className="select-centre">
                    <div>
                        <h5 style={{marginRight:"10px"}}> Centre de vaccination</h5>
                    </div>
                     
                </div>
                <Input className="inputInfo"/>

                <div className="select-lieu">
                    <div>
                        <h5 style={{marginRight:"10px"}}> Le lieu où aura lieu la vaccination</h5>
                    </div>
                     
                </div>
                
                <Input className="inputInfo"/>
                
                
                
                
        </div>
    )
}

export default SecondVir
