package com.reactvehicles.reactvehicles.repository;

import com.reactvehicles.reactvehicles.domain.Vehicle;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


public interface VehicleRepository extends CrudRepository<Vehicle, Long> {

    @Query(value = "SELECT * FROM vehicle JOIN location ON vehicle.location_id = location.id ORDER BY vehicle.id ASC", nativeQuery = true)
    Iterable<Vehicle> findAllOrderByVehicleId();

}
