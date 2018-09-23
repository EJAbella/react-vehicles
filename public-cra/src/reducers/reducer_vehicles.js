import {
  FETCHING_VEHICLES,
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_FAILED,
  DELETING_VEHICLE,
  DELETE_VEHICLE_SUCCESS,
  DELETE_VEHICLE_FAILED,
  UPDATE_VEHICLE_SUCCESS,
  UPDATING_VEHICLE, UPDATE_VEHICLE_FAILED, ADDING_VEHICLE, ADD_VEHICLE_SUCCESS, ADD_VEHICLE_FAILED
} from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_VEHICLES:
      return state;

    case FETCH_VEHICLES_SUCCESS:
      console.log(action.payload)
      return action.payload;

    case FETCH_VEHICLES_FAILED:
      return state;

    case DELETING_VEHICLE:
      return state;

    case DELETE_VEHICLE_SUCCESS:
      return state.filter(vehicle => vehicle.id !== action.payload);

    case DELETE_VEHICLE_FAILED:
      return state;

    case ADDING_VEHICLE:
      return state;

    case ADD_VEHICLE_SUCCESS:
      return [...state, action.payload];

    case ADD_VEHICLE_FAILED:
      return state;

    case UPDATING_VEHICLE:
      return state;

    case UPDATE_VEHICLE_SUCCESS:
      console.log(action.payload)
      return state.map(vehicle => vehicle.id === action.payload.id ? action.payload : vehicle);

    case UPDATE_VEHICLE_FAILED:
      return state;

    default:
      return state
  }
}