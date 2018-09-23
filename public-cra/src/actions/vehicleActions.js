import {
  FETCHING_VEHICLES,
  FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_FAILED,
  DELETING_VEHICLE,
  DELETE_VEHICLE_SUCCESS,
  DELETE_VEHICLE_FAILED,
  UPDATE_VEHICLE_SUCCESS,
  UPDATING_VEHICLE,
  UPDATE_VEHICLE_FAILED,
  ADDING_VEHICLE,
  ADD_VEHICLE_SUCCESS,
  ADD_VEHICLE_FAILED
} from "./types";
import axios from 'axios';

// Fetch initial Vehicle data
export const fetchVehicles = () => dispatch => {
  dispatch({
    type: FETCHING_VEHICLES
  });

  axios.get('http://localhost:8080/vehicle/')
    .then(response => dispatch({
      type: FETCH_VEHICLES_SUCCESS,
      payload: response.data
    }))
    .catch(err => dispatch({
      type: FETCH_VEHICLES_FAILED,
      payload: err
    }))
};

// Delete Vehicle
export const deleteVehicle = id => dispatch => {
  dispatch({
    type: DELETING_VEHICLE
  });

  axios.delete(`http://localhost:8080/vehicle/${id}`)
    .then(response => dispatch({
      type: DELETE_VEHICLE_SUCCESS,
      payload: id
    }))
    .catch(err => dispatch({
      type: DELETE_VEHICLE_FAILED,
      payload: err
    }))
};

// Create Vehicle
export const addVehicle = vehicle => dispatch => {
  dispatch({
    type: ADDING_VEHICLE
  });

  axios.post('http://localhost:8080/vehicle/', vehicle)
    .then(response => dispatch({
      type: ADD_VEHICLE_SUCCESS,
      payload: response.data
    }))
    .catch(err => dispatch({
      type: ADD_VEHICLE_FAILED,
      payload: err
    }))
};

// Update Vehicle
export const updateVehicle = vehicle => dispatch => {
  dispatch({
    type: UPDATING_VEHICLE
  });

  axios.put('http://localhost:8080/vehicle/', vehicle)
    .then(response => dispatch({
      type: UPDATE_VEHICLE_SUCCESS,
      payload: response.data
    }))
    .catch(err => dispatch({
      type: UPDATE_VEHICLE_FAILED,
      payload: err
    }))

};