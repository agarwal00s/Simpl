import React from "react";
import "./App.css";
import Card from './Card.js';
import simpl2 from "./simpl2.svg";

function App() {
  return (
    <div style={{ backgroundColor: "#E5E5E5", height: "100vh" }}>
      <div className="headerTop" />
      <div className="welcomeDiv">
        <div className="welcomeSimpl">Welcome to <img src={simpl2} style={{margin: '0 5px 0 5px'}} alt="I"></img>Simpl</div>
        <div className="welcomeAccounts">2 active accounts</div>
      </div>
      <div className="cardsDiv">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
