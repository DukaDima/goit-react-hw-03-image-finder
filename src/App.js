import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';

export default class App extends Component {
  static propTypes = {
    searchPhoto: PropTypes.string,
    filter: PropTypes.string,
    showModal: PropTypes.bool,
    modalPhoto: PropTypes.string,
  };
  state = {
    searchPhoto: '',
    showModal: false,
    modalPhoto: '',
  };
  handleFormSubmit = searchPhoto => {
    this.setState({ searchPhoto });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleClickPhoto = modalPhoto => {
    this.setState({ modalPhoto, showModal: true });
  };

  render() {
    const { searchPhoto, showModal } = this.state;
    return (
      <>
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largePhoto={this.state.modalPhoto}
          />
        )}
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchPhoto={searchPhoto}
          onClick={this.handleClickPhoto}
        />
      </>
    );
  }
}
