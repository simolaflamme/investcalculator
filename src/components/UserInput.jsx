
import { useState } from "react";

export default function UserInput({Label,name,Id,InitialValue ,handlelift,Onlift,...props}) {
    
   
    
    

    return (

        <div  id="user-input"  {...props}>

           
            
                <label >{Label}</label>
                <input type="number" value={Onlift[name]} id={Id} name={name} required onChange={handlelift} />
            
            
        </div >
    );
}