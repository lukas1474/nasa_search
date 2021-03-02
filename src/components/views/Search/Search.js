import React, { useState } from 'react';
import styles from '../Search/Search.module.scss';

import { Container, Row, Col } from 'react-bootstrap';
import { SEARCH_ENDPOINT_URL, nasaAccessKey } from '../../../config';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Search = () => {
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState('');
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState();
  const [click, setClick] = useState(true);

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
    setClick(true);
  };

  const handleKeyPress = (option) => {
    setSearch(option.geometry.coordinates);
    setName(option.place_name);
    setClick(false);
    console.log('search', search);
    if (search[0]) {
      fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${search[0]}&lat=${search[1]}&date=2014-02-01&dim=0.15&api_key=${nasaAccessKey}`).then((res) => {
        console.log('fetch', res);
        setPhoto(res.url);
        return res.json();
      });
    }
  };

  return(
    <div className={styles.root}>
      <input type="text" value={name} onKeyUp={handleSearch} onChange={handleChange} className/>
      {click ? (
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
        <Row className="d-flex justify-content-around align-content-center w-100">
          <Col className={`${styles.photoCube} col-5`}>
            <div>
              <img src={photo} alt='Nasa'/>
              {console.log('photo', photo)}
            </div>
          </Col>
          <Col className={`${styles.mapCube} col-5`}>
            <MapContainer center={[search[1], search[0]]} zoom={1} scrollWheelZoom={false} className={styles.mapCubeContainer}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[search[1], search[0]]}></Marker>
            </MapContainer>
          </Col>
        </Row>
      ): null}
    </div>
  );
};
export default Search ;
