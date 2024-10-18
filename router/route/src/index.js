import React from 'react'; 
import ReactDOM from 'react-dom'; 
// import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom' 
import './index.css'; 
import App from './App'; 
// import About from './About' 
// import Contact from './Contact' 
// const routing = ( 
// <Router> 
// <div> 
// <h1>React Router Example</h1> 
// <Routes>
// <Route path="/" element={<App/>} /> 
// <Route path="/about" element={<About/>} /> 
// <Route path="/contact" element={<Contact/> } /> 
// </Routes>
// </div> 
// </Router> 
// ) 
// ReactDOM.render(routing, document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)