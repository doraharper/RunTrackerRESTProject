package com.skilldistillery.runtracker.test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.runtracker.Run;

class RunTest {
	private EntityManagerFactory emf;
	private EntityManager em;
	private Run run;
	
	@BeforeEach
	public void setUp() throws Exception {
		emf = Persistence.createEntityManagerFactory("RunTracker");
		em = emf.createEntityManager();
		run = em.find(Run.class, 1);
	}

	@AfterEach
	public void tearDown() throws Exception {
		em.close();
		emf.close();
		run = null;
	}	

	@Test
	void test_run_mapping() {
		assertEquals("dharps", run.getName());
	}

}
