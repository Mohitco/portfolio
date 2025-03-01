import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <h1>Copyright © 2025, Hecho por Bytezon | Referencia: MiladiCode</h1>
    </footer>
  );
};

const footerStyle = {
  display: "flex",
  position: "relative", // ⚠️ Evita que el footer se superponga con el contenido
  bottom: 0,
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  height: "40px",
  backgroundColor: "rgba(255, 255, 255, 0.128)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 0 15px rgba(255, 255, 255, 0.356)",
  fontSize: "10px",
};

export default Footer;
