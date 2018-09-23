import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import {deleteVehicle, updateVehicle} from "../actions/vehicleActions";

class Vehicle extends React.Component {

  state = {
    vehicle: {
      id: this.props.vehicle.id,
      photo_url: this.props.vehicle.photo_url,
      make: this.props.vehicle.make,
      model: this.props.vehicle.model,
      price: this.props.vehicle.price,
      location: {
        name: this.props.vehicle.location.name
      }
    },
    editActive: false
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      vehicle: {
        ...this.state.vehicle,
        [e.target.name]: e.target.value
      }
    })
  };


  handleSubmit = e => {
    e.preventDefault();
    this.props.updateVehicle(this.state.vehicle);
    this.setState({editActive: false})
  };

  render() {
    return (
      <React.Fragment>
        <tr>
          <td><img src={this.props.vehicle.photo_url} alt=""/></td>
          <td>{this.props.vehicle.make}</td>
          <td>{this.props.vehicle.model}</td>
          <td>${this.props.vehicle.price}.00</td>
          <td>{this.props.vehicle.location.name}</td>
          <td><Button onClick={() => this.setState({editActive: !this.state.editActive})} color='info'>Edit</Button></td>
          <td><Button onClick={() => this.props.deleteVehicle(this.props.vehicle.id)} color='danger'>Delete</Button>
          </td>
        </tr>
        { this.state.editActive && <td><form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name='photo_url' type="text" value={this.state.vehicle.photo_url}/>
          <input onChange={this.handleChange} name='make' type="text" value={this.state.vehicle.make}/>
          <input onChange={this.handleChange} name='model' type="text" value={this.state.vehicle.model}/>
          <input onChange={this.handleChange} name='price' type="text" value={this.state.vehicle.price}/>
          <select name='location' onChange={this.handleChange}>
            <option value="1">Melbacor Used Cars</option>
            <option value="2">Buzzness Used Cars</option>
            <option value="3">Updat Used Cars</option>
          </select>
          <Button type='submit' color='success'>Update</Button>
        </form></td>}
      </React.Fragment>
    );
  }
}

export default connect(null, { deleteVehicle, updateVehicle })(Vehicle);