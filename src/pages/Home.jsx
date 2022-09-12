import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <p>Content</p>
      <div className="content__list">
        <Link className="textlink" to="/pageone">Lust</Link>
        <Link className="textlink" to="/pagetwo">Gluttony</Link>
        <Link className="textlink" to="/pagethree">Greed</Link>
        <Link className="textlink" to="/pagefour">Sloth</Link>
        <Link className="textlink" to="/pagefive">Wrath</Link>
        <Link className="textlink" to="/pagesix">Envy</Link>
        <Link className="textlink" to="/pageseven">Pride</Link>
      </div>
    </div>
  );
};
