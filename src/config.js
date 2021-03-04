import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN;

export const nasaAccessKey = '0DlgtZAIsm3RpxCJYCFr2Fp89JWIeewju1LgfSyP';

export const SEARCH_ENDPOINT_URL = (search) => (`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${mapboxgl.accessToken}`);
