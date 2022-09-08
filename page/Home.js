import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Toast } from 'react-toastify';
import axios from "axios";

import './Home.css';


// Get user information from backend - API 

const data = [
  { ID: 1, name: "Shama", mail:"shama@gmail.com", contact: 76556699 },
  { ID: 2, name: "kamal", mail:"kamal@gmail.com", contact: 77655669  },
  {  ID: 3, name: "Viktor", mail:"Viktor@gmail.com", contact: 77651109  },
  {  ID: 4, name: "Chamal", mail:"Chamal@gmail.com", contact: 75655669  },
  { ID: 5, name: "pankayan", mail:"pankayan@gmail.com", contact: 77556699 },
  { ID: 6, name: "frank", mail:"frank@gmail.com", contact: 77643669  },
 
]



function Home() {
  
  return (
   <div className='container'>
    <div className='header'><h2>ELZIAN AGRO EMPLOYEES MANAGEMENT SYSTEM</h2></div>
    <div className="App">
    
       <table>
        <tr className='tableNav'>
        <th>ID</th>
          <th>Emp Name</th>
          <th>Emp Email</th>
          <th>Emp Contact</th>
          <th>Emp Action</th>
        </tr>
        <tbody>
        {data.map((val, key,) => {
          return (
            <tr key={key}>
              
              <td>{val.ID}</td>
              <td>{val.name}</td>
              <td>{val.mail}</td>
              <td>{val.contact}</td>
              <td >
              
              <Link to={`/edit/${val.ID}`}>
                  <button className='btn btn-Edit'>Edit</button>
                  </Link>
                  <Link to={`/delete/${val.ID}`}>
                  <button className='btn btn-Delete'>Delete</button>
                  </Link>
                  <Link to={`/view/${val.ID}`}>
                  <button className='btn btn-View'>View</button>
                  </Link>
              
              
              </td>



              <td>{val.action}</td>
            </tr>
           
          )
        })}</tbody>
      </table>
    </div>
    </div>
  );
}

export default Home;
