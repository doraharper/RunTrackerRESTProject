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
	private Integer id;
	
	private String name;
	
	private Integer age;
	
	@CreationTimestamp
	@Temporal(TemporalType.DATE)
	private Date date;
	
	@Column(name="distance_in_miles")
	private double distanceInMiles;
	
	@Column(name="total_time_in_minutes")
	private Integer timeInMin;
	
	
	


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
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

	public Integer getTimeInMin() {
		return timeInMin;
	}

	public void setTimeInMin(Integer timeInMin) {
		this.timeInMin = timeInMin;
	}
	
//Constructors	
	
	
}
