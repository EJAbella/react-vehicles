import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import Vehicle from "./Vehicle";

const VehicleList = props => {

  const vehicleList = props.vehicles.map(vehicle => <Vehicle key={vehicle.id} vehicle={vehicle}/>);

  return (
    <Table striped>
      <thead>
      <tr>
        <th>Image</th>
        <th>Make</th>
        <th>Model</th>
        <th>Price</th>
        <th>Dealership</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      {vehicleList}
      </tbody>
    </Table>
  );
};

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles
  }
};


export default connect(mapStateToProps)(VehicleList);