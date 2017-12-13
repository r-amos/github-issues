import React, { Component } from "react";
import { connect } from "react-redux";
import Issues from "../components/issues";
import { fetchIssues } from "../redux/actions/issues";

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
    this.props.dispatch(fetchIssues("https://api.github.com/repos/octocat/Hello-World/issues"));
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
          <Issues
            className={"test"}
            key={index}
            delay={index}
            title={this.props.data[issue].title}
            number={this.props.data[issue].number}
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

IssuesContainer.defaultProps = {
  data: {}
};

export default connect(mapStateToProps)(IssuesContainer);
