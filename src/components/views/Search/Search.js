import React, { useState } from 'react';
import styles from '../Search/Search.module.scss';

import { SEARCH_ENDPOINT_URL } from '../../../config';

import SearchResults from '../SearchResults/SearchResults';

const Search = () => {
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState('');
  const [name, setName] = useState();

  console.log(search);

  const handleSearch = (event) => {
    console.log(event.currentTarget.value);
    fetch(SEARCH_ENDPOINT_URL(event.currentTarget.value))
      .then((res) => {
        return res.json();
      }).then(res => {
        setOptions(res.features);
        console.log('coś', res.features);
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
    const latlon = option.geometry.coordinates;
    console.log('search', search);
  };

  return(
    <div className={styles.root}>
      <input type="text" value={name} onKeyUp={handleSearch} onChange={handleChange} className/>
      {options.length ? (
        <ul className={styles.optionsUl}>
          {options && options.map(option => (
            <li key={option.place} className={styles.optionsLi}>
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
