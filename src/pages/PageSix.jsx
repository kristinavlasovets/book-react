import React from "react";
import { Link } from "react-router-dom";

export const PageSix = () => {
  return (
    <div>
      <p>Envy</p>
      <p>
        Envy (invidia) is characterized by an insatiable desire like greed and lust. It can be described as a sad or resentful covetousness towards the traits or possessions oа someone else. It arises from vainglory and severs a man from his neighbor.
        According to the most widely accepted views, only pride weighs down the soul more than envy among the capital sins. Like pride, envy has been associated directly with the devil.
      </p>
      <Link className="textlink" to="/">
        back to content
      </Link>
    </div>
  );
};
