import React from "react";
import "./App.css";
import simplIcon from "./simplIcon.svg";
import lockfill from "./lockfill.svg";

function Card() {
  return (
    <div className="card">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="cardSimpl">
          <img src={simplIcon} style={{marginRight: '5px'}}></img> Simpl
        </div>
        <div className="cardBill">BILL OVERDUE</div>
      </div>
      <div style={{ marginTop: "50px", display: "flex", alignItems: "top" }}>
        <div style={{ display: "inline-block" }}>
          <div className="spent">SPENT TILL NOW</div>
          <div className="amount">1800</div>
        </div>
        <div style={{ display: "inline-block", marginLeft: "100px" }}>
          <div className="spent">DUE DATE</div>
          <div className="dateDisplay">15 Aug</div>
        </div>
      </div>
      <div className="paymentButton"><img src={lockfill} style={{marginRight: '5px'}}></img>PAY Rs 1500</div>
    </div>
  );
}

export default Card;
