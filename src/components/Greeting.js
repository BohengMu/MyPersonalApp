import React from "react";
import ReactDOM from "react-dom"

function Greeting(){
    let date=new Date();
    let hours=date.getHours();
    let name ="Boheng"
    let greet="";
    if(hours>12 && hours<18) greet="Good Afternoon"
    if(hours<12 && hours>6) greet="Good Morning"
    if(hours>18 || hours<6) greet="Good Night"
    return(
        <div className="container text-light">
            <h1> {greet +" "+ name+"!"} it is {date.toDateString()}</h1>
        </div>
    )
}

export default Greeting;