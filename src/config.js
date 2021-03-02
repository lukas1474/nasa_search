import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.MAPBOXGL_ACCESS_TOKEN;

export const nasaAccessKey = process.env.NASA_ACCESS_KEY;

export const SEARCH_ENDPOINT_URL = (search) => (`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${mapboxgl.accessToken}`);
export const NASA_URL = (search) => (`https://api.nasa.gov/planetary/earth/assets?lon=${search[0]}.75&lat=${search[1]}.5&date=2014-02-01&dim=0.15&api_key=${nasaAccessKey}`);
