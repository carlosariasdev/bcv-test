import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingIndicator from 'react-loading-indicator';

import SearchForm from 'components/SearchForm';
import Matches from 'components/Matches';

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
    const { match } = this.props;

    return (
      <div>
        <SearchForm onSearch={this.onSearch} />
        <div className="matches-list">
          { match.requesting ?
            <LoadingIndicator className="loader" segmentWidth={8} />
            :
            <Matches list={match.list} />
          }
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
