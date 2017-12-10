import React from "react";
import { Link } from "react-router-dom";

const Issues = props => {
  const style = {
    animationDelay: `${props.delay}0ms`
  };

  return (
    <div className={props.className} style={style}>
      <Link to={`/issue/${props.number}`}>{props.title}</Link>
    </div>
  );
};

export default Issues;
