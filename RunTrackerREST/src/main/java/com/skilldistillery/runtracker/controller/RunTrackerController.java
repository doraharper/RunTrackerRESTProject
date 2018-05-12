package com.skilldistillery.runtracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.runtracker.Run;
import com.skilldistillery.runtracker.services.RunTrackerService;

@RestController
@RequestMapping("api")
public class RunTrackerController {

	@Autowired
	private RunTrackerService runSer;
	
	@RequestMapping(path="ping")
	public String ping() {
		return "pong";
	}
	
	@RequestMapping(path="runs/{id}", method=RequestMethod.GET)
	public Run getRunById(@PathVariable int id) {
		return runSer.getRunById(id);
	}
	
	@RequestMapping(path="runs", method=RequestMethod.GET)
	public List<Run> getAll(){
		return runSer.index();
	}
	
	@RequestMapping(path="runs", method=RequestMethod.POST)
	public Run create(@RequestBody String jsonRun) {
		return runSer.create(jsonRun);
	}
	
	@RequestMapping(path="runs/{id}", method=RequestMethod.PUT)
	public Run replace(@RequestBody String jsonRun, @PathVariable Integer id) {
		return runSer.replace(jsonRun, id);
	}
	@RequestMapping(path="runs/{id}", method=RequestMethod.PATCH)
	public Run update(@RequestBody String jsonRun, @PathVariable Integer id) {
		return runSer.update(jsonRun, id);
	}
}
