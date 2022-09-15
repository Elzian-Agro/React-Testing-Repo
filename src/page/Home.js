import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import axios from 'axios';
import "./Home.css";
import personData from "../Data";


// Get user information from backend - API

function Home() {
  const [data, setdata] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  

  const handleAddFormSubmit = async () => {
    await axios.post(`http://localhost:5000/api/post`, {
      emp_name:  name ,
      emp_email: email ,
      emp_contact: contact 
    }).then((
   
   ) => { }).catch(err => console.log(err));
  };
  const handleclick = async (e,id) => {
  e.preventDefault()
    if (window.confirm("Are you sure to delete?")) {
     await axios.delete(`http://localhost:5000/api/remove/${id}`).then(()=>{
      console.log("frank");
      setdata(data.filter(item=>item.id!=id))
    }
      )
    }
  };
  useEffect(() => {
    fetchData();

  },[data] );
 

  const fetchData = async () => {
    await axios.get('http://localhost:5000/api/get').then((res) => {
      const fdata = res.data;  
      if (!fdata) {
        console.log("empty fdata");
      }
      setdata(fdata);

    }).catch(err => console.log(err));
 
  }

  return (
    <div className="home_container">
      <div className="header">
        <h2>ELZIAN AGRO EMPLOYEES CONTACT DETAILS</h2>
      </div>
      <div className="user">
      
        <form onSubmit={handleAddFormSubmit}>
          <input className="input" type="text" name="emp_name" required="required" placeholder="Enter the Name" value={name} onChange={(event)=>setName(event.target.value)}/>
          <input className="input" type="email" name="emp_email" required="required" placeholder="Enter the Email" value={email} onChange={(event)=>setEmail(event.target.value)} />
          <input className="input" type="number"  name="emp_contact" required="required" placeholder="Enter Contact Number" value={contact} onChange={(event)=>setContact(event.target.value)}/><br/>
          <button className="addButton" type="submit">Add User</button>
        </form></div>
      <div className="table_container">
        <table>
          <thead>
            <tr className="tableNav">
              <th>ID</th>
              <th> name</th>
              <th> email</th>
              <th> contact</th>
              <th> Action</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.id}</td>
                    <td>{val.emp_name}</td>
                    <td>{val.emp_email}</td>
                    <td>{val.emp_contact}</td>
                    <td>
                      <div className="buttons">
                        <Link to={`/edit/${val.id}`}>
                          <button className="btn btn-Edit">Edit</button>
                        </Link>
                        <div onClick={(e) => handleclick(e,val.id)}>
                          <button className="btn btn-Delete">Delete</button>
                        </div>
                        <Link to={`/view/${val.id}`}>
                          <button className="btn btn-View">View</button>
                        </Link>
                      </div>
                    </td>

                  </tr>
                );
              })}
          </tbody>
        </table>
       
        
      </div>
      
    </div>
  );
}

export default Home;