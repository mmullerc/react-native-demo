import * as types from '../actions/actionTypes';

export const cars = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_CARS_SUCCESS:
      return payload;
    default:
      return state;
  }
};
