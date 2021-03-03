import React, { useState } from 'react';
import styles from '../Search/Search.module.scss';

import { SEARCH_ENDPOINT_URL } from '../../../config';

import SearchResults from '../SearchResults/SearchResults';

const Search = () => {
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState('');
  const [name, setName] = useState();

  const handleSearch = (event) => {
    fetch(SEARCH_ENDPOINT_URL(event.currentTarget.value))
      .then((res) => {
        return res.json();
      }).then(res => {
        setOptions(res.features);
      });
  };

  const handleChange = (event) => {
    setName(event.target.value);
    setSearch('');
  };

  const handleKeyPress = (option) => {
    setSearch(option.geometry.coordinates);
    setName(option.place_name);
    setOptions([]);
  };

  return(
    <div className={styles.root}>
      <input type="text" value={name} onKeyUp={handleSearch} onChange={handleChange} className/>
      {options ? (
        <ul className={styles.optionsUl}>
          {options && options.map(option => (
            <li key={option.id} className={styles.optionsLi}>
              <button
                onClick={() => handleKeyPress(option)}
              >
                {option.place_name}
              </button>
            </li>
          ))}
        </ul>
      ): null}
      {search.length ? (
        <SearchResults search={search}/>
      ): null}
    </div>
  );
};

export default Search ;
