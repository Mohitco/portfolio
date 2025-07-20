import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
    <h1>©Copyright 2025, Made by <span className="gradient"> "Aadarsh Kumar Jha"</span>
    </h1>
  </footer>
  
  );
};

const footerStyle = {
  display: "flex",
  position: "relative", 
  bottom: 0,
  width: "100vw",
  alignItems: "center",
  justifyContent: "center",
  height: "40px",
  backgroundColor: "rgba(255, 255, 255, 0.128)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 0 15px rgba(255, 255, 255, 0.356)",
  fontSize: "10px",
};

export default Footer;
