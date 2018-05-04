import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchForm from 'components/SearchForm';

import { fetchMatches } from 'redux/match/action';

class Home extends Component {
  static propTypes = {
    match: PropTypes.shape({
      requesting: PropTypes.bool.isRequired,
      list: PropTypes.array.isRequired,
      error: PropTypes.shape(),
    }).isRequired,
    fetchMatchesRequest: PropTypes.func.isRequired,
  };

  onSearch = (code) => {
    this.props.fetchMatchesRequest(code);
  }

  render() {
    console.log(this.props.match);
    return (
      <SearchForm onSearch={this.onSearch} />
    );
  }
}

const mapStateToProps = state => ({
  match: state.match,
});

const mapDispatchToProps = dispatch => ({
  fetchMatchesRequest: code => dispatch(fetchMatches(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
