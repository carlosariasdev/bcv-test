import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingIndicator from 'react-loading-indicator';

import SearchForm from 'components/SearchForm';
import Matches from 'components/Matches';
import Error from 'components/Error';

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

  renderResult = () => {
    const { match } = this.props;

    if (match.requesting) {
      return <LoadingIndicator className="loader" segmentWidth={8} />;
    }

    if (match.error) {
      return <Error text="Something went wrong. Please try again!" />;
    }

    return <Matches list={match.list} />;
  }

  render() {
    return (
      <div>
        <SearchForm onSearch={this.onSearch} />
        <div className="matches-list">
          { this.renderResult() }
        </div>
      </div>
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
