import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  state = {
    fifaCode: '',
  };

  handleCodeChange = (fifaCode) => {
    this.setState({ fifaCode });
  }

  handleSubmit = (e) => {
    const { onSearch } = this.props;
    const { fifaCode } = this.state;

    e.preventDefault();
    onSearch(fifaCode);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="content row search-form">
          <input className="search-box" type="text" onChange={this.handleCodeChange} />
          <input className="search-btn" type="submit" value="Search" />
          <br />
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
