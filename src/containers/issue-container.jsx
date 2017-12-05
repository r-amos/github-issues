import React, { Component } from "react";
import { connect } from "react-redux";
import Issue from "../components/issue";
import { fetchIssues } from "../redux/actions/actions";

class IssueContainer extends Component {
  componentWillMount() {
    this.props.dispatch(fetchIssues(""));
  }

  render() {
    if (!this.props.data) {
      return <div>Loading...</div>;
    }

    const issues = Object.keys(this.props.data).map((issue, index) => {
      return <Issue key={index} title={this.props.data[issue].title} />;
    });

    return <div>{issues}</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

IssueContainer.defaultProps = {
  data: {}
};

export default connect(mapStateToProps)(IssueContainer);
