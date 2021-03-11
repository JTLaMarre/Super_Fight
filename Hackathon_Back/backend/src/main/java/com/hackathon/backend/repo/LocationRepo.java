package com.hackathon.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hackathon.backend.model.Location;

public interface LocationRepo extends JpaRepository<Location, Integer>{

	public Location findById(int id);
	
	public Location save(Location lo);
}
