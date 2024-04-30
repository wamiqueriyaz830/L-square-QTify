import React from "react";
import {ReactComponent as SearchIcon} from "../../assests/search.svg"
import styles from "./searchbar.module.css"

const Search = ({ text }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={text}></input>
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;