// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
// import IncreaseAge from "./IncreaseAge";
// import { ContextButton } from "./ContextButton";
// import Greeting from "./Greeting";
// import Blogging from "./Blogging";
// import Counter from "./Counter";
// import ViewSave from "./ViewSave";
// import MyComponent from "./MyComponent";
import CarUpdate from "./CarUpdate";
class App extends React.Component {
  render() {
    return (
      // <div>
      //   <h1><Greeting  isLoggedIn ={true}/></h1>
      // </div>
      // <div>
      //   <h1><Blogging role="admin"/></h1>
      // </div>
      // <div className="App">
      //   <h1><Counter /></h1>
      // </div>
      // <div className="App">
      //   <h1><ViewSave /></h1>
      // </div>
      // <div>
      //   <h1><MyComponent status={0}/></h1>
      // </div>
      // <div>
      //   <h1><ContextButton/></h1>
      // </div>
      <div className="App">
        <CarUpdate />
      </div>
    );
  }
}
export default App;
