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
        <Link className="textlink" to="/pagefour">Page Four</Link>
        <Link className="textlink" to="/pagefive">Page Five</Link>
        <Link className="textlink" to="/pagesix">Page Six</Link>
        <Link className="textlink" to="/pageseven">Page Seven</Link>
      </div>
    </div>
  );
};
