
import React, { UseState,UseEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import { Toast } from 'react-toastify';
import axios from "axios";
const Home = () => {
  const [data, setData] = UseState([]);

  const loadData = async () =>{
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };
  UseEffect(() => {
    loadData();
  },[]);
    return (
    <div style={{marginTop:"150px"}}>
    <table className='styled-table'>
      <thead>
        <tr>
          <th style={{textAlign: "center"}}>No.</th>
          <th style={{textAlign: "center"}}>Name</th>
          <th style={{textAlign: "center"}}>Email</th>
          <th style={{textAlign: "center"}}>Contact</th>

        </tr>
      </thead>
      <tbody>
        {data.map((item, index)=>{
          return(
            <tr key={item.id}>
              <th scope="row">{index+1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.conact}</td>
              <td>
                <Link to={'/update/${item.id}'}>
                <button className='btn btn-edit'>Edit</button>
                </Link>
                <button className='btn btn-delete'>Delete</button>
                <Link to={'/view/${item.id}'}>
                <button className='btn btn-view'>View</button>
                </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
      <h2>home</h2>
      </div>
  )
}

export default Home;