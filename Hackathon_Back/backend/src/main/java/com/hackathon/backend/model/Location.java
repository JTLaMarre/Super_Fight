package com.hackathon.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Location {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String locationName;

	public Location() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Location(int id, String locationName) {
		super();
		this.id = id;
		this.locationName = locationName;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setLocationName(String locationName) {
		this.locationName = locationName;
	}

	public String getLocationName() {
		return locationName;
	}
	
}
