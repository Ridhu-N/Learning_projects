// import logo from './logo.svg';
import "./App.css";
import Mybutton from "./component/button"; //button
import Image from "./component/imgsrc"; // image
import Object from "./component/obj"; //object
import Arrobj from "./arrobj";
import Myevent from "./component/onclick";
import "./style.css";
import Mybtn from "./component/btncnt";
import { Component, useState } from "react";
function App() {
  return (
    <div>
      <h1>Here comes the button</h1>
      <Mybutton />
      <Image />
      <Object />
      <Arrobj />
     <Myevent />
     <Mybtn />
    </div>
  );
}
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Ridhu</h1>
//       </div>
//     );
//   }
// }
export default App;
