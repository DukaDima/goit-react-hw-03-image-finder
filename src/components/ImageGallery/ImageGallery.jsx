import React, { Component } from 'react';
import '../../components/styles.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Spinner from '../Loader/Loader';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
export default class ImageGallery extends Component {
  static propTypes = {
    photos: PropTypes.array,
    loading: PropTypes.bool,
    page: PropTypes.number,
    error: PropTypes.any,
    searchPhoto: PropTypes.string,
  };
  state = {
    photos: [],
    loading: false,
    page: 1,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const { searchPhoto } = this.props;
    const { page } = this.state;
    if (prevProps.searchPhoto !== searchPhoto) {
      this.setState({ page: 1, photos: [], loading: true });
      fetch(
        `https://pixabay.com/api/?q=${searchPhoto}&page=1&key=22333452-088c943be01bb3bdea991b2c2&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(photos => this.setState({ photos: photos.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
    if (
      prevState.page !== page &&
      page > 1 &&
      prevProps.searchPhoto === searchPhoto
    ) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${searchPhoto}&page=${page}&key=22333452-088c943be01bb3bdea991b2c2&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(photos =>
          this.setState({ photos: [...prevState.photos, ...photos.hits] }),
        )
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        });
    }
  }
  handleAddPage = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };
  handleModalPhoto = modalPhoto => {
    this.props.onClick(modalPhoto);
  };
  render() {
    const { photos, loading, error } = this.state;
    return (
      <div>
        {error && <p>???????????? ?????????????? ???? ?????????? {this.props.searchPhoto}</p>}
        {loading && <Spinner />}
        {!photos && <p>?????????????? ???????????????? ??????????</p>}
        {photos && (
          <ul className="ImageGallery">
            {photos.map(hit => (
              <li
                className="ImageGalleryItem"
                key={hit.id}
                onClick={() => this.handleModalPhoto(hit.largeImageURL)}
              >
                <ImageGalleryItem src={hit.webformatURL} />
              </li>
            ))}
          </ul>
        )}
        {photos.length > 0 && <Button onClick={this.handleAddPage} />}
      </div>
    );
  }
}
