import React from 'react';
import {
  Button,
  Collapse,
  Form,
  FormGroup,
  Label,
  Input,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { connect } from 'react-redux';
import {addVehicle} from "../actions/vehicleActions";

class TopNav extends React.Component {

  state = {
    vehicle: {
      year: '',
      make: '',
      model: '',
      miles: '',
      price: '',
      photo_url: '',
      location: 1
    },
    addVehicle: false
  };

  toggleForm = () => {
    this.setState({addVehicle: !this.state.addVehicle})
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      vehicle: {
        ...this.state.vehicle,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addVehicle(this.state.vehicle)
    this.setState({addVehicle: false})
  }

  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Vehicles</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button onClick={()=>this.toggleForm()} color='success'>+</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {this.state.addVehicle && <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="year">Year</Label>
            <Input onChange={this.handleChange} type="number" name="year" id="year" placeholder="Year..." />
          </FormGroup>
          <FormGroup>
            <Label for="make">Make</Label>
            <Input onChange={this.handleChange} type="text" name="make" id="make" placeholder="Make..." />
          </FormGroup>
          <FormGroup>
            <Label for="model">Model</Label>
            <Input onChange={this.handleChange} type="text" name="model" id="model" placeholder="Model..." />
          </FormGroup>
          <FormGroup>
            <Label for="miles">Miles</Label>
            <Input onChange={this.handleChange} type="number" name="miles" id="miles" placeholder="Miles..." />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input onChange={this.handleChange} type="number" name="price" id="price" placeholder="Price..." />
          </FormGroup>
          <FormGroup>
            <Label for="photo_url">Photo URL</Label>
            <Input onChange={this.handleChange} type='text' name="photo_url" id="photo_url" placeholder="Photo URL..." />
          </FormGroup>
          <FormGroup>
            <Label for="location">Select</Label>
            <Input onChange={this.handleChange} type="select" name="location" id="location">
              <option value='1'>Melbacor Used Cars</option>
              <option value='2'>Buzzness Used Cars</option>
              <option value='3'>Updat Used Cars</option>
            </Input>
          </FormGroup>
          <Button type='submit' color='success'>Submit</Button>
        </Form>}
      </div>
    );
  }
}

export default connect(null, { addVehicle })(TopNav);