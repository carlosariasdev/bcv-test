import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  state = {
    code: '',
  };

  handleCodeChange = (e) => {
    this.setState({ code: e.target.value });
  }

  handleSubmit = (e) => {
    const { onSearch } = this.props;
    const { code } = this.state;

    e.preventDefault();
    onSearch(code);
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
