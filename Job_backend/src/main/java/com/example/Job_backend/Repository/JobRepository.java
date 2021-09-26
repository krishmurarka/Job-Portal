package com.example.Job_backend.Repository;

import com.example.Job_backend.Model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.Id;
import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {

//    public List<Job> findAllCategories(int JobCategoryId);

}
