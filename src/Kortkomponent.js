import React from 'react'
import './App.css'





export default function Kortkomponent(props) {

  //om kortet redan ingår i ett par som är taget får den 'x' som kod
  if (props.memorykod === 'x') {
    return (
      <div className='inaktivt-kort'></div>
    )
  }
  else {
    return (

      <div id={props.id} onClick={() => props.handleClick(props.id)} className={props.sendclass}>
        {/*<p>{props.id}</p>
    <p>{props.memorykod}</p>
  <p>{props.uppvand}</p>*/}
      </div>
    )
  }
}


