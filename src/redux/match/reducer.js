import {
  FETCH_MATCHES_REQUEST,
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_FAILURE,
} from 'redux/constants';

const initialState = {
  requesting: false,
  list: [],
  error: null,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_MATCHES_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case FETCH_MATCHES_SUCCESS:
      return {
        requesting: false,
        list: payload,
        error: null,
      };
    case FETCH_MATCHES_FAILURE:
      return {
        requesting: false,
        list: [],
        error: payload,
      };
    default:
      return state;
  }
}
