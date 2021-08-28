import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';

// import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  state = {
    searchPhoto: '',
    showModal: false,
    modalPhoto: '',
  };
  handleFormSubmit = searchPhoto => {
    this.setState({ searchPhoto });
    console.log(searchPhoto);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleClickPhoto = modalPhoto => {
    this.setState({ modalPhoto, showModal: true });

    console.log(this.state.modalPhoto);
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
        {/* <ToastContainer autoClose={3000} /> */}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          searchPhoto={searchPhoto}
          onClick={this.handleClickPhoto}
        />
      </>
    );
  }
}
