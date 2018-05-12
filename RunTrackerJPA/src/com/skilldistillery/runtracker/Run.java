package com.skilldistillery.runtracker;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Run {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private int age;
	
	@CreationTimestamp
	@Temporal(TemporalType.DATE)
	private Date date;
	
	@Column(name="distance_in_miles")
	private double distanceInMiles;
	
	@Column(name="total_time_in_minutes")
	private int timeInMin;
	
//Constructors	
	
	public Run() {}
	

	public Run(int id, String name, int age, Date date, double distanceInMiles, int timeInMin) {
	super();
	this.id = id;
	this.name = name;
	this.age = age;
	this.date = date;
	this.distanceInMiles = distanceInMiles;
	this.timeInMin = timeInMin;
}


// Getters and Setters	
	
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getDistanceInMiles() {
		return distanceInMiles;
	}

	public void setDistanceInMiles(double distanceInMiles) {
		this.distanceInMiles = distanceInMiles;
	}

	public int getTimeInMin() {
		return timeInMin;
	}

	public void setTimeInMin(int timeInMin) {
		this.timeInMin = timeInMin;
	}
	

}
