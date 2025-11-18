import React from "react";
export default function Home(){
    const user=
    JSON.parse(localStorage.getItem("user"));
    return(
        <div style={{padding:"20px"}}>
            <h1>Welcome {user.role ==="Admin" ? "Admin" : "User"} </h1>
        </div>
    );
}