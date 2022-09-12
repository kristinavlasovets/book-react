import React from "react";
import { Link } from "react-router-dom";

export const PageTwo = () => {
  return (
    <div>
      <p>Gluttony</p>
      <p>
        Gluttony (Latin: gula) is the overindulgence and overconsumption of
        anything to the point of waste. The word derives from the Latin
        gluttire, meaning to gulp down or swallow. One reason for its
        condemnation is that gorging the prosperous may leave the needy hungry.
        Medieval church leaders such as Thomas Aquinas took a more expansive
        view of gluttony, arguing that it could also include an obsessive
        anticipation of meals and over-indulgence in delicacies and costly foods.
      </p>
      <Link className="textlink" to="/">back to content</Link>
    </div>
  );
};
