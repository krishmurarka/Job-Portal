package com.example.Job_backend.Controller;

import com.example.Job_backend.DAO.Implementation.JobCategoryImplementation;
import com.example.Job_backend.DAO.UserJobCategory;
import com.example.Job_backend.Model.Job;
import com.example.Job_backend.Model.JobCategory;
import com.example.Job_backend.Model.Streams;
import com.example.Job_backend.Repository.JobCategoryRepository;
import com.example.Job_backend.Repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Job_controller {

     @Autowired
     private JobCategoryRepository jobCategoryRepository;

    // intern - {  , , }
    @GetMapping("/getJobCategory/{jobCategory}")
    public List<Job> getJob(@PathVariable(value = "jobCategory") int jobCategory) throws Exception {
            return jobCategoryRepository.findAllCategories(jobCategory);
    }
}
