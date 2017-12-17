import React, { Component } from "react";
import { connect } from "react-redux";
import Issues from "../components/issues";
import { initializeData, fetchIssues } from "../redux/actions/issues";

import PaginationBar from "../components/pagination-bar";

class IssuesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLimit: 10,
      activePage: 1
    };
  }

  componentWillMount() {
    this.props.initialize(
      "https://api.github.com/repos/octocat/Hello-World/issues"
    );
  }

  render() {
    if (!this.props.data) {
      return <div>Loading...</div>;
    }

    const issues = [];
    const keys = Object.keys(this.props.data);

    keys.forEach((issue, index) => {
      issues.push(
        <Issues
          className={"test"}
          key={index}
          delay={index}
          title={this.props.data[issue].title}
          number={this.props.data[issue].number}
        />
      );
    });

    return (
      <div>
        <div>{issues}</div>
        <PaginationBar
          pages={this.props.pages}
          onClickHandler={pageNumber =>
            this.props.onPageButtonClick(pageNumber)
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.issues,
    pages: state.numberOfPages,
    url: state.repoURL
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initialize: url => dispatch(initializeData(url)),
    onPageButtonClick: pageNumber => dispatch(fetchIssues(pageNumber))
  };
};

IssuesContainer.defaultProps = {
  data: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesContainer);
