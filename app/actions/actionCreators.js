import { createAsyncCreator } from '../services/asyncCreators';
import * as types from './actionTypes';
import * as api from '../services/api';

export const fetchCars = () => (
  createAsyncCreator(
    types.FETCH_CARS,
    types.FETCH_CARS_SUCCESS,
    () => api.get('api/cars')
  )
);
