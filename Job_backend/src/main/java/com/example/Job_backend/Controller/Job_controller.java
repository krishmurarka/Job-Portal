package com.example.Job_backend.Controller;


import com.example.Job_backend.Model.Job;
import com.example.Job_backend.Repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class Job_controller {

    @Autowired
    private JobRepository jobRepository;
    // xss - cross site scripting  - important
    // http prameter pollution
    // csrf attacks (cross site request )
    // server settings
    // intern - {  , , }
    @CrossOrigin(origins = "*")
    @GetMapping("/findAllCategories/{jobCategory}")
    public List<Job> getJob(@PathVariable(value = "jobCategory") int jobCategory) throws Exception {
        List<Job> jobs = jobRepository.findAllCategories(jobCategory);
        System.out.println(Arrays.toString(jobs.toArray()));
        return jobs;
    }

    @GetMapping("/findAllStreams/{streamId}")
    public List<Job> getStream(@PathVariable(value = "streamId") String streamId) throws Exception {
        List<Job> streamJobs = jobRepository.findAllStreams(streamId.charAt(0));
        return streamJobs;
    }

    @GetMapping("/findJobStreams/{jobCategory}/{streamId}")
    public List<Job> getJobStream(@PathVariable int jobCategory, @PathVariable String streamId) throws Exception {
        List<Job> jobStreamCategories = jobRepository.findJobStreams(jobCategory, streamId.charAt(0));
        return jobStreamCategories;
    }
}