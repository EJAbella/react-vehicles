package com.reactvehicles.reactvehicles.controller;

import com.reactvehicles.reactvehicles.domain.Vehicle;
import com.reactvehicles.reactvehicles.repository.LocationRepository;
import com.reactvehicles.reactvehicles.repository.VehicleRepository;
import com.reactvehicles.reactvehicles.service.VehicleDetailsRequestModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/vehicle")
public class vehicleController {

    private final
    VehicleRepository vehicleRepository;

    private final
    LocationRepository locationRepository;

    @Autowired
    public vehicleController(VehicleRepository vehicleRepository, LocationRepository locationRepository) {
        this.vehicleRepository = vehicleRepository;
        this.locationRepository = locationRepository;
    }

    @GetMapping(value = "/")
    public Iterable<Vehicle> getAllVehicles() {
        return vehicleRepository.findAllOrderByVehicleId();
    }

    @CrossOrigin
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public String deleteVehicle(@PathVariable long id) {
        vehicleRepository.deleteById(id);
        return "";
    }

    @CrossOrigin
    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Vehicle addVehicle(@RequestBody VehicleDetailsRequestModel newVehicle) {
        Vehicle vehicle = new Vehicle();
        vehicle.setPhoto_url(newVehicle.getPhoto_url());
        vehicle.setYear(newVehicle.getYear());
        vehicle.setMake(newVehicle.getMake());
        vehicle.setModel(newVehicle.getModel());
        vehicle.setMiles(newVehicle.getMiles());
        vehicle.setPrice(newVehicle.getPrice());
        vehicle.setLocation(locationRepository.findById((long) newVehicle.getLocation()).orElse(null));
        vehicleRepository.save(vehicle);
        return vehicle;
    }

    @CrossOrigin
    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public Vehicle updateVehicle(@RequestBody VehicleDetailsRequestModel newVehicle) {
        Vehicle vehicle = vehicleRepository.findById(newVehicle.getId()).orElse(null);
        vehicle.setPhoto_url(newVehicle.getPhoto_url());
        vehicle.setMake(newVehicle.getMake());
        vehicle.setModel(newVehicle.getModel());
        vehicle.setPrice(newVehicle.getPrice());
        vehicle.setLocation(locationRepository.findById((long) newVehicle.getLocation()).orElse(null));
        vehicleRepository.save(vehicle);
        return vehicle;
    }

}
