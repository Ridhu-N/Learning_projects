import React from 'react';
function AuthorLayout(){
    return (
        <div>
            <h1>Author Page</h1>
            <h3>What will you write today? </h3>
        </div>
    )
}
function ModeratorLayout(){
    return(
        <div>
            <h1>Moderator Page</h1>
            <h3>Your ongoing events</h3>
        </div>
    );
}
function AdminLayout(){
    return(
        <div>
            <h1>Admin Page</h1>
            <h3>Their ongoing events</h3>
        </div>
    );
}
function GuestLayout(){
    return(
        <div>
            <h1>Guest Page</h1>
            <h3>your current feed</h3>
        </div>
    );
}
function Blogging(props){
    const {role}=props;
    switch(role){
        case "author" :
            return <AuthorLayout/>;
        case "admin":
            return <AdminLayout />;
        case "moderator":
            return <ModeratorLayout/>;
        default :
            return <GuestLayout/>
    }   
}
export default Blogging;