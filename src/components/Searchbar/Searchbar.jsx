import React, { Component } from 'react';
// import { toast } from 'react-toastify';
import '../../components/styles.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  static propTypes = {
    searchPhoto: PropTypes.string,
  };
  state = {
    searchPhoto: '',
  };
  handlePhotoChange = event => {
    this.setState({ searchPhoto: event.currentTarget.value.toLowerCase() });
  };
  handlePhotoSubmit = event => {
    event.preventDefault();
    if (this.state.searchPhoto.trim() === '') {
      toast.error('ВВЕДИТЕ КЛЮЧЕВОЕ СЛОВО ПОИСКА');
      return;
    }
    this.props.onSubmit(this.state.searchPhoto);
    this.setState({ searchPhoto: '' });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handlePhotoSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            value={this.state.searchPhoto}
            onChange={this.handlePhotoChange}
          />
        </form>
      </header>
    );
  }
}
