package com.example.Job_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JobBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(JobBackendApplication.class, args);
        System.out.println(System.getProperty("catalina.base"));
    }
}
