import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchForm from 'components/SearchForm';

class Home extends Component {
  onSearch = () => {
    console.log("API called");
  }

  render() {
    return(
      <SearchForm onSearch={this.onSearch} />
    );
  }
}

export default Home;
