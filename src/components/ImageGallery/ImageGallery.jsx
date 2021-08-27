import React, { Component } from 'react';
import '../../components/styles.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Spinner from '../Loader/Loader';
import Button from '../Button/Button';
export default class ImageGallery extends Component {
  state = {
    photos: null,
    loading: false,
    page: 1,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchPhoto !== this.props.searchPhoto) {
      this.setState({ photos: '' });
      this.setState({ page: 1 });
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchPhoto}&page=${this.state.page}&key=22333452-088c943be01bb3bdea991b2c2&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(photos => this.setState({ photos: photos.hits }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
    if (prevState.page !== this.state.page) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchPhoto}&page=${this.state.page}&key=22333452-088c943be01bb3bdea991b2c2&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(photos =>
          this.setState({ photos: [...prevState.photos, ...photos.hits] }),
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  handleAddPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { photos, loading, error } = this.state;
    return (
      <div>
        {error && <p>Ошибка запроса по слову {this.props.searchPhoto}</p>}
        {loading && <Spinner />}
        {!photos && <p>Введите ключевое слово</p>}
        {photos && (
          <ul className="ImageGallery">
            {photos.map(hit => (
              <li className="ImageGalleryItem" key={hit.id}>
                <ImageGalleryItem src={hit.webformatURL} />
              </li>
            ))}
          </ul>
        )}
        {photos && <Button onClick={this.handleAddPage} />}
      </div>
    );
  }
}
