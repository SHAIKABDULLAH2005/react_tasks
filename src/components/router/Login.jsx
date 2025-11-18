import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    const handleLogin=()=>{
        const savedUser=
        JSON.parse(localStorage.getItem("user"));

        if(!savedUser){
            alert("No user found. Please Sign Up");
            return;
        }

        if(savedUser.username === username && savedUser.password===password){
            alert("Login Succesful !");
            navigate("/home");
        } else{
            alert("Invalid Credantials !");
        }
    };

    return(
        <div style={{padding:"20px"}}>
            <h2>Login</h2>
            <input type="text"
            placeholder="Enter Username"
            onChange={(e)=>setUsername(e.target.value)} />

            <input type="text"
            placeholder="Enter Password"
            onChange={(e)=>setPassword(e.target.value)} />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
    
}