/* eslint-disable react/prop-types */
import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeHolder, className } = this.props;

    return (
      <>
        <input
          className={className}
          type="search"
          placeholder={placeHolder}
          name="searchField"
          onChange={onChangeHandler}
        />
      </>
    );
  }
}

export default SearchBox;
