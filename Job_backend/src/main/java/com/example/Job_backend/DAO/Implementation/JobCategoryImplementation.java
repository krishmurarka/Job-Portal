package com.example.Job_backend.DAO.Implementation;

import com.example.Job_backend.DAO.UserJobCategory;
import com.example.Job_backend.Model.Job;
import com.example.Job_backend.Model.JobCategory;
import com.example.Job_backend.Repository.JobCategoryRepository;
import com.example.Job_backend.Repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;
import java.util.List;

public class JobCategoryImplementation implements UserJobCategory {

    @Autowired
    private JobCategoryRepository jobCategoryRepository;



    @Override
    public List<Job> findAllCategories(int JobCategoryId) throws Exception {

        // find through JobCategory for each category
        List<Job> a = new ArrayList<>();
        return a;

    }
}