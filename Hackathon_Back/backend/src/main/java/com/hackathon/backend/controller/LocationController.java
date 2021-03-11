package com.hackathon.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.backend.model.Location;
import com.hackathon.backend.repo.LocationRepo;

@RestController
@CrossOrigin
@RequestMapping("/location")
public class LocationController {

	private LocationRepo lr;
	@Autowired
	LocationController(LocationRepo lr){
		this.lr= lr;
	}
	
	@GetMapping("/random")
	public String randomLocation() {
		int randomNum = (int) (Math.floor(Math.random() * 4) + 1);
		System.out.println(randomNum);
		return lr.findById(randomNum).getLocationName();
	}
	
	@PostMapping("/new")
	public void save(@RequestBody Location lo) {
		lr.save(lo);
	}
}
