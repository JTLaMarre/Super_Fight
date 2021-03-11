package com.hackathon.backend;

import java.util.ArrayList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.hackathon.backend.model.Location;

@SpringBootApplication
public class BackendApplication {

	/**
	 * 
	 * Run the application then use postman to add the following data at http://localhost:8000/location/new
	 * 
	 * {
    	"locationName": "Space"
		}
		
		And then the same using: Atlantis, City of Gold, In an Airplane, In a Busy City
	 */
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);

	}

}
