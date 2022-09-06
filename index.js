const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Frank@1997",
    database: "crud_contact"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get",(req, res)=>{
    const sqlGet ="SELECT * FROM contact_db";
     db.query(sqlGet, (error, result) => {
        res.send(result); 
        
     }); 
     
 }); 

app.get("/",(req, res)=>{
  /* const sqlInsert ="INSERT INTO contact_db (name,email,contact) VALUES ('john paul','john@gmail.com',24555666)";
    db.query(sqlInsert, (error, result) =>{
        console.log("error", error);
        console.log("result",result);
        res.send("hello express");
    }); */
    
});

app.listen(5000, () =>{
    console.log("server is running on port 5000");
})