package com.example.Job_backend.Repository;

import com.example.Job_backend.Model.Job;
import com.example.Job_backend.Model.JobCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Component
public interface JobCategoryRepository extends JpaRepository<JobCategory, Long> {

    @Query(value = "Select * from quotes_tb t where t.jobCategory =: 1", nativeQuery = true)
    public List<Job> findAllCategories(int JobCategoryId) throws Exception;
}
