import React from "react";
import { Link } from "react-router-dom";

export const PageFour = () => {
  return (
    <div>
      <p>Sloth</p>
      <p>
        Sloth (Latin: tristitia, or acedia "without care") refers to a peculiar
        jumble of notions, dating from antiquity and including mental,
        spiritual, pathological, and physical states. It may be defined as
        absence of interest or habitual disinclination to exertion. In his Summa
        Theologica, Saint Thomas Aquinas defined sloth as "sorrow about
        spiritual good".
      </p>
      <Link className="textlink" to="/">
        back to content
      </Link>
    </div>
  );
};
