import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchIssue } from "../redux/actions/issue";
import { Link } from "react-router-dom";

class Issue extends Component {
  componentDidMount() {
    this.props.getIssue(this.props.match.params.id);
  }

  render() {
    if (!this.props.issue) {
      return <div>Loding...</div>;
    }
    return (
      <div>
        <div>{this.props.issue.title}</div>
        <div>{this.props.issue.body}</div>
        <div>{this.props.issue.author}</div>
        <Link to={"/"}> Back </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    issue: state.issue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getIssue: number => dispatch(fetchIssue(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
