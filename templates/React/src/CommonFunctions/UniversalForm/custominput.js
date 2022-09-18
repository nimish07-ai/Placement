
// input={
//     Dispatch: true or false
//     onSuccess: function
//     type:"input type"
//     state: function
//     setState: set function to be used
//     withdiv: skip or true
// }
import Formcss  from "./../../components/CommonCss/form.module.css";
import React from "react";

export default function InputCreatorB(input)
{
    input=input.input
    let z=<input type={input.type}  value={input.state[input.name]}
   
    onChange={ev=>{
        if (input.CustomFucnction === undefined)
        {let a={...input.state}
        a[input.name]=ev.target.value
        input.setState(a)}
        else
        {
            input.CustomFucnction(ev)
        }
    }}/>

return<>
    <div className={Formcss["input-div"]}>
    <label htmlFor={input.type}>{input.labelText}</label>
    
   

    {input.withdiv ===undefined
    && z}
    {input.withdiv !==undefined
    && <div className={Formcss["icon_with_input"]}>{z} 
    <div>{input.iconElement}</div></div>}
</div>
</>
}

function areEqual(prevProps, nextProps) {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
  }
//   export default {React.memo(InputCreatorB, areEqual) as InputCreator} ;
