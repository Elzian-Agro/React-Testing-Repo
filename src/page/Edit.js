import React, { useEffect, useState } from 'react'
import './Edit.css';
import { Link,useParams } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [data, setdata] = useState();

  const fetchData = async () => {
    
    await axios.get(`http://localhost:5000/api/get/${id}`).then((res) => {
      const fdata = res.data;
      if (!fdata) {
        console.log("empty fdata");
      }
      setdata(fdata);
      console.log(fdata[0])
      setName(fdata[0].emp_name);
      setEmail(fdata[0].emp_email);
      setContact(fdata[0].emp_contact);

    }).catch(err => console.log(err));
  }

  useEffect(() => {
    fetchData();
   

  },[] );

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/api/update/${id}`, {
      emp_name:  name ,
      emp_email: email ,
      emp_contact: contact 
    }).then(() => {
      navigate('/details');
    }).catch(err => console.log(err));
   

  }


  return (
    <div className='con'><h1> edit employees details</h1>
    <div className='form'><form >
       
        <p> <b> new name</b></p>
       <input type="text" name="name" required="required" value={name} onChange={(event)=>setName(event.target.value)} /><br/><br/>
    <p><b> new email</b></p>
    <input type="email" name="email" required="required" value={email} onChange={(event)=>setEmail(event.target.value)} /><br/><br/>
    <p><b> new contact number</b></p>
 <input type="number" email="contact" required="required" value={contact} onChange={(event)=>setContact(event.target.value)}/>
   
           
              <h5 className="bt_text"><button className='but' type="submit" onClick={handleSubmit}>save</button></h5>
          
         
   
  </form></div>
  </div>
  )
}

export default Edit