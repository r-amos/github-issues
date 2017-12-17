import React from "react";

const PaginationButton = props => {
  return (
    <div onClick={() => props.onClickHandler(props.page)}>{props.text ? props.text : props.page}</div>
  );
};

export default PaginationButton;
