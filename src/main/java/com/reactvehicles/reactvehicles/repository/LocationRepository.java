package com.reactvehicles.reactvehicles.repository;

import com.reactvehicles.reactvehicles.domain.Location;
import org.springframework.data.repository.CrudRepository;

public interface LocationRepository extends CrudRepository<Location, Long> {
}
