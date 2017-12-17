import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchIssue, removeIssue } from "../redux/actions/issue";
import Loading from "./loading";
import { Link } from "react-router-dom";

class Issue extends Component {
  componentDidMount() {
    this.props.getIssue(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearIssue(this.props.match.params.id);
  }

  render() {
    if (!this.props.issue) {
      return <Loading />;
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
    getIssue: number => dispatch(fetchIssue(number)),
    clearIssue: number => dispatch(removeIssue(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
