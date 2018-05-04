import {
  BASE_URL,
} from 'redux/constants';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;

  throw error;
}

function parseJSON(response) {
  return response.json();
}

export default function http(endpoint, options) {
  return fetch(`${BASE_URL}/${endpoint}`, options)
    .then(checkStatus)
    .then(parseJSON);
}
