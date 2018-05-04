import React from 'react';
import PropTypes from 'prop-types';

function Matches({ list }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Match Number</th>
          <th>Home</th>
          <th>Away</th>
          <th>Location</th>
          <th>Date/Time</th>
          <th>Status</th>
          <th>Winner</th>
        </tr>
      </thead>
      <tbody>
        { list.map(match => (
          <tr key={match.match_number}>
            <td>{match.match_number}</td>
            <td>{match.home_team.country}</td>
            <td>{match.away_team.country}</td>
            <td>{match.location}</td>
            <td>{new Date(match.datetime).toLocaleString()}</td>
            <td>{match.status}</td>
            <td>{match.winner || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Matches.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      match_number: PropTypes.number.isRequired,
      home_team: PropTypes.shape({
        country: PropTypes.string.isRequired,
      }),
      away_team: PropTypes.shape({
        country: PropTypes.string.isRequired,
      }),
      location: PropTypes.string.isRequired,
      datetime: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      winner: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Matches;
