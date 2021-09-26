package com.example.Job_backend.DAO;

import com.example.Job_backend.Model.Job;
import com.example.Job_backend.Model.JobCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface UserJobCategory {

    // public JobCategory jobCategory;
//    @Query(value = "Select * from quotes_tb t where t.jobCategory =: 1", nativeQuery = true)
    public List<Job> findAllCategories(int JobCategoryId) throws Exception;
}
