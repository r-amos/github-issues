import React, { Component } from "react";
import { connect } from "react-redux";
import Issue from "../components/issue";
import { fetchIssues } from "../redux/actions/issues";

import PaginationBar from "../components/pagination-bar";

class IssueContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLimit: 10,
      activePage: 1
    };
  }

  componentWillMount() {
    this.props.dispatch(fetchIssues(""));
  }

  render() {
    if (!this.props.data) {
      return <div>Loading...</div>;
    }

    const issues = [];
    const keys = Object.keys(this.props.data);
    const { pageLimit, activePage } = this.state;
    const pages = Math.ceil(keys.length / pageLimit) + 1;

    keys.forEach((issue, index) => {
      if (
        index >= (activePage - 1) * pageLimit &&
        index + 1 <= activePage * pageLimit
      ) {
        issues.push(
          <Issue
            className={"test"}
            key={index}
            delay={index}
            title={this.props.data[issue].title}
          />
        );
      }
    });

    return (
      <div>
        <div>{issues}</div>
        <PaginationBar
          pages={pages}
          onPaginationClick={page => this.setState({ activePage: page })}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.issues
  };
};

IssueContainer.defaultProps = {
  data: {}
};

export default connect(mapStateToProps)(IssueContainer);
