import React, { Component } from 'react';
import style from '../Searchbar/Searchbar.module.css';
class Searchbar extends Component {
  state = {
    request: '',
  };
  handleChenge = e => {
    const value = e.currentTarget.value;
    this.setState({ request: value });
  };
  handleInputChange = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.request);
    this.reset();
  };
  reset = () => {
    this.setState({ request: '' });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleInputChange}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.request}
            onChange={this.handleChenge}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
