import React from 'react'

import {  DatePicker, Radio} from 'antd';
function FirstVir() {
    return (
        <div className="formulaire">

                <h6> Avez vous déjà attrapé le COVID-19</h6>
                <Radio.Group name="radiogroup" defaultValue={1} style={{marginTop:"10px", marginBottom:"10px" }}>
                    <Radio value={1}>Oui</Radio>
                    <Radio value={2}>Non</Radio>
                </Radio.Group>
                <h6 style={{marginBottom:"10px"}}> Si oui quelle est la date</h6>
                <DatePicker className="inputInfo"/>
                <h6> Avez-vous le diabète</h6>
                <Radio.Group name="radiogroup" defaultValue={1} style={{marginTop:"10px", marginBottom:"10px" }}>
                    <Radio value={1}>Oui</Radio>
                    <Radio value={2}>Non</Radio>
                </Radio.Group>
                <h6> Avez-vous une pression artérielle élevée?</h6>
                <Radio.Group name="radiogroup" defaultValue={1} style={{marginTop:"10px", marginBottom:"10px" }}>
                    <Radio value={1}>Oui</Radio>
                    <Radio value={2}>Non</Radio>
                </Radio.Group>
               
                
        </div>
    )
}

export default FirstVir