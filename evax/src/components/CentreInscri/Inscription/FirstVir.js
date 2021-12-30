import React from 'react'

import {  DatePicker, Radio} from 'antd';
function FirstVir() {
    return (
        <div className="formulaire">

                <h5> Avez vous déjà attrapé le COVID-19</h5>
                <Radio.Group name="radiogroup" defaultValue={1} style={{marginTop:"10px", marginBottom:"10px" }}>
                    <Radio value={1}>Oui</Radio>
                    <Radio value={2}>Non</Radio>
                </Radio.Group>
                <h5 style={{marginBottom:"10px"}}> Si oui quelle est la date</h5>
                <DatePicker className="inputInfo"/>
                <h5> Avez-vous le diabète</h5>
                <Radio.Group name="radiogroup" defaultValue={1} style={{marginTop:"10px", marginBottom:"10px" }}>
                    <Radio value={1}>Oui</Radio>
                    <Radio value={2}>Non</Radio>
                </Radio.Group>
                <h5> Avez-vous une pression artérielle élevée?</h5>
                <Radio.Group name="radiogroup" defaultValue={1} style={{marginTop:"10px", marginBottom:"10px" }}>
                    <Radio value={1}>Oui</Radio>
                    <Radio value={2}>Non</Radio>
                </Radio.Group>
               
                
        </div>
    )
}

export default FirstVir