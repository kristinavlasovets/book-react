import React from "react";
import Sculpture from '../assets/images/home.png'

export const Header = () => {
  return (
    <div className="header">
      <img className="header img" src={Sculpture} alt="sculpture" />
      <p>seven</p>
    </div>
  );
};
