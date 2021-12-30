import React,{useState} from 'react'
import "./Inscri.css"

import { Input, DatePicker, InputNumber , Radio} from 'antd';

function  Inscri() {

    
  const [name, setName] = useState();
  const [ncin, setCIN] = useState();
  const [date, setDate] = useState();
  const [phone, setPhone] = useState();

  const handleChange = (e) => {
    e.preventDefault(); // prevent the default action
    setName(e.target.value);
    localStorage.setItem('name', e.target.value);    
};
  
  function handleChangeDate(value) {
    localStorage.setItem('date', value);    
    setDate(value); 
   

  };
  function handleChangePhone(value) {
    setPhone(value); 
    localStorage.setItem('nmobile', value);    

  };
  const handleChangeCIN = (e) => {
    e.preventDefault(); // prevent the default action
    setCIN(e.target.value); 
    localStorage.setItem('ncin', e.target.value);    

  };
    return (
        <div className="formulaire">

                <h5> Nom et prénom</h5>
                <Input name="name"  onChange={handleChange} className="inputInfo"/>
                <h5> Numéro CIN</h5>
                <Input name="ncin"  onChange={handleChangeCIN} className="inputInfo"/>
                <h5> Numéro telephone</h5>
                <InputNumber name="nmobile"  onChange={handleChangePhone} className="inputInfo"/>
                <h5> Date de naissance</h5>
                <DatePicker name="date"  onChange={handleChangeDate} className="inputInfo"/>
                <h6> sexe</h6>
                <Radio.Group name="radiogroup" defaultValue={1} style={{marginTop:"10px", marginBottom:"10px" }}>
                    <Radio value={1}>femme</Radio>
                    <Radio value={2}>homme</Radio>
                 </Radio.Group>
                
                
        </div>
    )
}

export default Inscri
// import React,{useState} from 'react'
// import { useDispatch, } from 'react-redux'
// import { addUser, addUserApi } from '../../../redux/actions/userActions'

// import { Input, DatePicker, InputNumber , Radio} from 'antd';

// export default function  Inscri() {

    
//   const [name, setName] = useState();
//   const [ncin, setCIN] = useState();
//   const [date, setDate] = useState();
//   const [phone, setPhone] = useState();

//   const dispatch = useDispatch()

//   const addUserHandler = (name, ncin, date, phone, email) => {
//     dispatch(addUser({ name, ncin, date, phone, email }))
// }
// // add user with redux with thunk and api 
// const addUserApiHandler = (name, email) => {
//     dispatch(addUserApi({ name, email }))
// }

//     return (
//         <div className="formulaire">

//                 <h6> Nom et prénom</h6>
//                 <Input name="name"  onChange={(e) => { setName(e.target.value) }} />
//                 <h6> Numéro CIN</h6>
//                 <Input name="ncin" onChange={(e) => { setCIN(e.target.value) }}/>
//                 <h6> sexe</h6>
//                 <Radio.Group name="radiogroup" defaultValue={1} style={{marginTop:"10px", marginBottom:"10px" }}>
//                     <Radio value={1}>femme</Radio>
//                     <Radio value={2}>homme</Radio>
//                  </Radio.Group>
//                 <h6> Date de naissance</h6>
//                 <DatePicker name="date"  onChange={(e) => { setDate(e.target.value) }}/>
//                 <h6> Numéro telephone</h6>
//                 <InputNumber name="nmobile"  onChange={(e) => { setPhone(e.target.value) }}/>
                
//         </div>
//     )
// }



// const handleChange = (e) => {
//     e.preventDefault(); // prevent the default action
//     setName(e.target.value);
//     localStorage.setItem('name', e.target.value);    
// };
  
//   function handleChangeDate(value) {
//     localStorage.setItem('date', value);    
//     setDate(value); 
   

//   };
//   function handleChangePhone(value) {
//     setPhone(value); 
//     localStorage.setItem('nmobile', value);    

//   };
//   const handleChangeCIN = (e) => {
//     e.preventDefault(); // prevent the default action
//     setCIN(e.target.value); 
//     localStorage.setItem('ncin', e.target.value);    

//   };
//     return (
//         <div className="formulaire">

//                 <h6> Nom et prénom</h6>
//                 <Input name="name"  onChange={handleChange} className="inputInfo"/>
//                 <h6> Numéro CIN</h6>
//                 <Input name="ncin"  onChange={handleChangeCIN} className="inputInfo"/>
//                 <h6> sexe</h6>
//                 <Radio.Group name="radiogroup" defaultValue={1} style={{marginTop:"10px", marginBottom:"10px" }}>
//                     <Radio value={1}>femme</Radio>
//                     <Radio value={2}>homme</Radio>
//                  </Radio.Group>
//                 <h6> Date de naissance</h6>
//                 <DatePicker name="date"  onChange={handleChangeDate} className="inputInfo"/>
//                 <h6> Numéro telephone</h6>
//                 <InputNumber name="nmobile"  onChange={handleChangePhone} className="inputInfo"/>
                
//         </div>
//     )


// export default Inscri
