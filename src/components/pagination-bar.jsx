import React from "react";
import PaginationButton from "./pagination-button";

const PaginationBar = props => {
  const buttons = [];

  buttons.push(<PaginationButton
    key={props.pages + 1}
    text={'Previous'}
    page={props.currentPage-1}
    onClickHandler={props.onClickHandler}
  />);

  for (let i = 1; i <= 7; i++) {

    if(i < 4) {
      buttons.push(
        <PaginationButton
          key={props.currentPage - (4-i)}
          page={props.currentPage - (4-i)}
          onClickHandler={props.onClickHandler}
        />
      );
    } else if(i >= 5) {
      buttons.push(
        <PaginationButton
          key={props.pages - (7 - i)}
          page={props.pages - (7 - i)}
          onClickHandler={props.onClickHandler}
        />
      );
    }
    else {
      buttons.push(
        <PaginationButton
          key={props.currentPage - (4-i)}
          page={props.currentPage - (4-i)}
          onClickHandler={props.onClickHandler}
        />
      );
      buttons.push(
        <PaginationButton
          key={i}
          text={'...'}
        />
      );
    }
  }

  buttons.push(<PaginationButton
    key={props.pages + 2}
    text={'Next'}
    page={props.currentPage+1}
    onClickHandler={props.onClickHandler}
  />);

  return <div>{buttons}</div>;
};

export default PaginationBar;
