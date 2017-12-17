import React from "react";

const PaginationButton = props => {
  return (
    <div onClick={() => props.onClickHandler(props.page)}>{props.page}</div>
  );
};

export default PaginationButton;
