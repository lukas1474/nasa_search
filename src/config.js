import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN;

export const nasaAccessKey = process.env.REACT_APP_NASA_ACCESS_KEY;

export const SEARCH_ENDPOINT_URL = (search) => (`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${mapboxgl.accessToken}`);
export const NASA_URL = (search) => (`https://api.nasa.gov/planetary/earth/assets?lon=${search[1]}&lat=${search[0]}&date=2014-02-01&dim=0.15&api_key=${nasaAccessKey}`);
console.log(process.env);
