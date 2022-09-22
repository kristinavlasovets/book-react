import React from "react";
import { Link } from "react-router-dom";

export const PageBlock = (props) => {
  return (
    <div>
      <Link className="textlink" key={props.id} to={`/pages/:${props.id}`}>
        {props.title}
      </Link>
    </div>
  );
};
