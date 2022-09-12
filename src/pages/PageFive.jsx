import React from "react";
import { Link } from "react-router-dom";

export const PageFive = () => {
  return (
    <div>
      <p>Wrath</p>
      <p>
        Wrath (ira) can be defined as uncontrolled feelings of anger, rage, and even hatred. Wrath often reveals itself in the wish to seek vengeance. In its purest form, wrath presents with injury, violence, and hate that may provoke feuds that can go on for centuries. Feelings of wrath can manifest in different ways, including impatience, hateful misantropy, revenge, and self-destructive behavior, such as drug abuse, or Suicide.
      </p>
      <Link className="textlink" to="/">
        back to content
      </Link>
    </div>
  );
};
