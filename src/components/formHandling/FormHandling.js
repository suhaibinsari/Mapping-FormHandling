import React from 'react'
import { useState } from 'react'

export default function FormHandling() {

const [name, Setname]= useState("");

  return (
    <div>
      
      <input type="text" onChange={(e)=>Setname(e.target.value)} placeholder='User Name' name='name' />
      <h1>name is: {name}</h1>



    </div>
  )
}
