import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp(){
    const [username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const [role,setRole]=useState("User");
    const navigate=useNavigate();

    const handleSignup=()=>{
        if (password.length <6){
            alert("Password must be at least 6 characters");
            return;
        }

        const userData={username,password,role};
        localStorage.setItem("user",JSON.stringify(userData));
        alert("Signup succesful!");
        navigate("/login")
    };
    return(
        <div style={{padding:"20px"}}>
            <h2>Sign Up</h2>

            <input type="text" 
            placeholder="Username"
            onChange={(e)=>setUsername(e.target.value)} />

            <input type="text"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)} />

           <select onChange={(e)=>setRole(e.target.value)}>
            <option >User</option>
            <option >Admin</option>
           </select>

           <button onClick={handleSignup}>Register</button>    
        </div>
    );
}