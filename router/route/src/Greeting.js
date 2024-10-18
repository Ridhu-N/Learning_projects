import React from "react";
function UserGreeting(props){
    return <h1>Welcome Back!</h1>
}
function GuestGreeting(props){
    return <h1>Welcome Guest!</h1>
}
export default function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>
    }
    else{
        return <GuestGreeting />
    }
}