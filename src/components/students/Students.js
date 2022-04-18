import React from 'react'
import { useState } from 'react'
import './Students.css'


export default function Students() {

  const [students, setStudents] = useState([
    {
      name: "Suhaib Ansari",
      BtNo: "987",
      RollNo: "01"

    },
    {
      name: "Moon",
      BtNo: "997",
      RollNo: "21"

    },
    {
      name: "Julia",
      BtNo: "07",
      RollNo: "61"

    }



  ])

  console.log("students", Students)

  return (
    <div>
      <div className="listStyle">
        <h1>List-Of-Students</h1>
      </div>
      <div className="tableContent">

        <table id='wholeTable'>
          <tr id='tableContent'>
            <th>#</th>
            <th>Student Name</th>
            <th>Batch No</th>
            <th>Roll Number</th>
          </tr>


{
  students.map((students, index)=>{
return(

  <tr>
            <td>{index}</td>
            <td>{students.name}</td>
            <td>{students.BtNo}</td>
            <td>{students.RollNo}</td>
          </tr>


)
  }
  )
}

        

        </table>

      </div>


    </div>
  )
}
