// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { useState } from "react";
import Header from "./components/Header";
import Clicker from "./components/Clicker";
import "./App.css";

export default function App() {
  const [title] = useState("Clicker");
  return (
    <div className="App">
      <Header title={title} />
      <Clicker />
    </div>
  );
}