import React from 'react'
import { useState } from 'react'
import './FormHandling.css'

export default function FormHandling() {

const [name, Setname]= useState("");

  return (
    <div>
      <h1 className='inputTextMain'>Form-Handling</h1>
      <div className="inputField">
      <input type="text" onChange={(e)=>Setname(e.target.value)} placeholder='User Name' name='name' />
      </div>
      <h3 className='inputText'>Your Input: {name}</h3>


    </div>
  )
}
