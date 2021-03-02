import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../SearchResults/SearchResults.module.scss';
import { Row, Col } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { nasaAccessKey } from '../../../config';





const SearchResults = ({search}) => {

  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (search[0]) {
      fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${search[1]}&lat=${search[0]}&date=2014-02-01&dim=0.025&api_key=${nasaAccessKey}`).then((res) => {
        console.log('fetch', res);
        setPhoto(res.url);
        return res.json();
      });
    }
  }, []);

  return(
    <Row className="d-flex justify-content-around align-content-center w-100">
      <Col className={`${styles.photoCube} col-5`}>
        <div>
          <img src={photo} alt='Nasa' className={styles.photo}/>
          {console.log('photo', photo)}
        </div>
      </Col>
      <Col className={`${styles.mapCube} col-5`}>
        <MapContainer center={[search[1], search[0]]} zoom={3} scrollWheelZoom={false} className={styles.mapCubeContainer}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[search[1], search[0]]}></Marker>
        </MapContainer>
      </Col>
    </Row>
  );
};


SearchResults.propTypes = {
  search: PropTypes.array,
  photo: PropTypes.string,

};
export default SearchResults;
