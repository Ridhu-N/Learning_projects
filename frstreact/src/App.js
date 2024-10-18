//  import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import style from "./style.module.css";
import React, { Component } from "react";
import Carfunc from "./component/Car.js";
import {Carprops,Propsmulti,Dirprops} from "./component/props.js";
import {Templit,Numlit} from "./component/typeslit";
const x = 10;
var ans = [];
for (var i = x + 1; i <= x + 5; i++) {
  ans.push(i + " ");
}
//components of components
function Car(){
  return<h2>I am a car!</h2>
}
function Garage(){
  return(
    <div >
      <h1>Who lives in the Garage?</h1>
      <Car />
    </div>
  )
}
const myElement = <h1>{ans}</h1>;
class App extends Component {
  render() {
    return (
      <div>
        {myElement}
        <h1 style={{ fontFamily: "Courier", color: "red" }}>
          THis my Inline style
        </h1>
        <h2>This is the stylesheet</h2>
        <h3 className={style.modstyle}>This id the module styled heading</h3>
        <p><Garage /></p> 
        <p><Carfunc /></p>
        <p><Carprops brand="Ford" /></p>
        <p><Propsmulti name="Ridhu" company="ChangeCX" /></p>
        <p><Dirprops name="Ridhu" company="ChangeCX" /></p>
        <p><Templit name={`My String Value ${ans}`} /></p>
        <p><Numlit age={42}/></p>
      </div>
    );
  }
}

export default App;
