import http from 'utils/http';
import {
  FETCH_MATCHES_REQUEST,
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_FAILURE,
} from 'redux/constants';

function fetchMatchesRequest() {
  return {
    type: FETCH_MATCHES_REQUEST,
  };
}

function fetchMatchesSuccess(result) {
  return {
    type: FETCH_MATCHES_SUCCESS,
    payload: result,
  };
}

function fetchMatchesFailure(error) {
  return {
    type: FETCH_MATCHES_FAILURE,
    payload: error,
  };
}

export function fetchMatches(code) {
  return (dispatch) => {
    dispatch(fetchMatchesRequest());

    http(`matches/country?fifa_code=${code.toUpperCase()}`)
      .then(matches => dispatch(fetchMatchesSuccess(matches)))
      .catch(error => dispatch(fetchMatchesFailure(error)));
  };
}
