package com.skilldistillery.runtracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.runtracker.Run;

public interface RunTrackerRepository extends JpaRepository<Run, Integer> {

}
