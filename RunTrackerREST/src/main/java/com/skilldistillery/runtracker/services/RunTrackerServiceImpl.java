package com.skilldistillery.runtracker.services;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.skilldistillery.runtracker.Run;
import com.skilldistillery.runtracker.repository.RunTrackerRepository;

@Service
public class RunTrackerServiceImpl implements RunTrackerService {

	@Autowired
	private RunTrackerRepository runRepo;

	@Override
	public Run getRunById(int id) {
		return runRepo.findById(id).get();
	}

	@Override
	public List<Run> index() {
	
		return runRepo.findAll();
	}

	@Override
	public Run create(String jsonRun) {
		ObjectMapper mapper = new ObjectMapper();
		Run run = null;
		try {
			run = mapper.readValue(jsonRun, Run.class);
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return runRepo.saveAndFlush(run) ;
	}

	@Override
	public Run update(String jsonRun, int id) {
		Run r = runRepo.findById(id).get();
		ObjectMapper mapper = new ObjectMapper();
		
		try {
			Run updated = mapper.readValue(jsonRun, Run.class);
			if (updated.getName() != null && !updated.getName().equals("")) {
				r.setName(updated.getName());
			}
			if (updated.getAge() != null && !updated.getAge().equals("")) {
				r.setAge(updated.getAge());
			}
			if(updated.getDistanceInMiles() != 0) {
				r.setDistanceInMiles(updated.getDistanceInMiles());
			}
			if(updated.getTimeInMin() != 0) {
				r.setTimeInMin(updated.getTimeInMin());
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		return r;
	}

	@Override
	public Run replace(String jsonRun, int id) {
		Run r = runRepo.findById(id).get();
		ObjectMapper mapper = new ObjectMapper();
		
		try {
			Run updated = mapper.readValue(jsonRun, Run.class);
			r.setName(updated.getName());
			r.setAge(updated.getAge());
			r.setDistanceInMiles(updated.getDistanceInMiles());
			r.setTimeInMin(updated.getTimeInMin());
			
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		return r;
	}

	@Override
	public boolean delete(int id) {
		 runRepo.deleteById(id);
		 return true;
	}
}
