import React from 'react';
import PropTypes from 'prop-types';

function Matches({ list }) {
  return (
    <table className="matches-list">
      <thead>
        <td>Match Number</td>
        <td>Home</td>
        <td>Away</td>
        <td>Location</td>
        <td>Date/Time</td>
        <td>Status</td>
        <td>Winner</td>
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
  list: PropTypes.arrayOf({
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
  }).isRequired,
};

export default Matches;
