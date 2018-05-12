package com.skilldistillery.runtracker.services;

import java.util.List;

import com.skilldistillery.runtracker.Run;

public interface RunTrackerService {
	
		public Run getRunById(int id);
		public List<Run> index();
		public Run create(String jsonRun);
		public Run update(String jsonRun, int id);
		public Run replace(String jsonRun, int id);
		public boolean delete(int id);
		}
