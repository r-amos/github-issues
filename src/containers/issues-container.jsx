import React, { Component } from "react";
import { connect } from "react-redux";
import Issues from "../components/issues";
import Loading from "../components/loading";
import { initializeData, fetchIssues } from "../redux/actions/issues";

import PaginationBar from "../components/pagination-bar";

class IssuesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {page: 1}
  }

  componentWillMount() {
    this.props.initialize(
      "https://api.github.com/repos/facebook/react/issues"
    );
  }

  onPageButtonClick = page => {
    this.setState({page})
    this.props.fetchPageIssues(page)
  }

  render() {

    const {data, pages} = this.props;

    if (!this.props.data) {
      return <Loading />
    }

    const issues = [], keys = Object.keys(data);

    keys.forEach((issue, index) => {
      issues.push(
        <Issues
          className={"test"}
          key={index}
          delay={index}
          title={data[issue].title}
          number={data[issue].number}
        />
      );
    });

    return (
      <div>
        <h1>{this.state.page}</h1>
        <div>{issues}</div>
        <PaginationBar
          currentPage={this.state.page}
          pages={pages}
          onClickHandler={pageNumber =>
            this.onPageButtonClick(pageNumber)
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.issues,
    pages: state.numberOfPages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initialize: url => dispatch(initializeData(url)),
    fetchPageIssues: pageNumber => dispatch(fetchIssues(pageNumber))
  };
};

IssuesContainer.defaultProps = {
  data: {}
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuesContainer);
