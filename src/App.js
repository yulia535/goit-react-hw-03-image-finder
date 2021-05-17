import React from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

class App extends React.Component {
  state = {
    request: '',
    articles: [],
    page: 1,
    isLoading: false,
    largeImageURL: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape' && this.state.largeImageURL.length > 0) {
        this.setState({ largeImageURL: '' });
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.request !== prevState.request) {
      this.loadArticles();
    }
  }

  query = data => {
    this.setState({ request: data, page: 1, articles: [] });
  };

  loadArticles = () => {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.request}&page=${this.state.page}&key=20762651-8afef8984095b4948176f683e&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => {
        this.setState(prevState => ({
          page: prevState.page + 1,
          articles: [...prevState.articles, ...response.data.hits],
        }));
        this.scroll();
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  getUrl = e => {
    e.preventDefault();
    const url = e.target.getAttribute('url');
    this.setState({ largeImageURL: url });
  };

  closeModal = e => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      this.setState({ largeImageURL: '' });
    }
  };

  render() {
    const { articles, isLoading, largeImageURL } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.query} />

        {articles.length > 0 && (
          <ImageGallery onClick={this.getUrl} images={articles} />
        )}

        {isLoading && <Loader />}

        {articles.length > 0 && !isLoading && (
          <Button onClick={this.loadArticles} />
        )}

        {largeImageURL.length > 0 && (
          <Modal largeImageURL={largeImageURL} onClick={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
