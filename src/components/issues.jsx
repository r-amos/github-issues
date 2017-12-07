import React from "react";
import { connect } from "react-redux";
import { fetchIssue } from "../redux/actions/issue";

const Issues = props => {
  const style = {
    animationDelay: `${props.delay}0ms`
  };

  return (
    <div
      onClick={() => props.onIssueClick(props.number)}
      className={props.className}
      style={style}
    >
      {props.title}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onIssueClick: number => dispatch(fetchIssue(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
