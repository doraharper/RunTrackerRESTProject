package com.skilldistillery.runtracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class RunTrackerRestApplication extends SpringBootServletInitializer{

	 @Override
	 protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(RunTrackerRestApplication.class);
	 }
	 
	public static void main(String[] args) {
		SpringApplication.run(RunTrackerRestApplication.class, args);
	}
}
