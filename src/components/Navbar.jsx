import "../styles/components/Navbar.css";
import "../styles/Index.css";
import React from "react";

function Navbar() {
  return (
    <div className="nav_main">
      <img className="nav_img" src="src/images/Troll Face.png" alt="" />
      <h1 className="nav_text">Meme Generator</h1>
      <h2 className="proj_title">React Course - Project 3</h2>
    </div>
  );
}

export default Navbar;
