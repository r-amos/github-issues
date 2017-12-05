import React from "react";

const Issue = props => {
  const style = {
    animationDelay: `${props.delay}0ms`
  };

  return (
    <div className={props.className} style={style}>
      {props.title}
    </div>
  );
};

export default Issue;
