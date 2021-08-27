import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
// import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  state = {
    searchPhoto: '',

    showModal: false,
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
  // componentDidMount() {
  //   fetch(
  //     'https://pixabay.com/api/?q=forest&page=1&key=22333452-088c943be01bb3bdea991b2c2&image_type=photo&orientation=horizontal&per_page=12',
  //   )
  //     .then(res => res.json())
  //     .then(photos => this.setState({ photos }));
  // }

  render() {
    const { searchPhoto, showModal } = this.state;
    return (
      <>
        {showModal && <Modal onClose={this.toggleModal}></Modal>}
        {/* <ToastContainer autoClose={3000} /> */}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchPhoto={searchPhoto} />

        {/* {photos && <div>тут будут фотки</div>} */}
      </>
    );
  }
}
