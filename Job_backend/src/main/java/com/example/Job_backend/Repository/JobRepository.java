package com.example.Job_backend.Repository;

import com.example.Job_backend.Model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Id;
import java.util.List;
@Repository
public interface JobRepository extends JpaRepository<Job, Integer> {

    @Query(value ="Select * from quotes_tb t where t.category_id = 1", nativeQuery = true)
    public List<Job>  findAllCategories(int JobCategoryId);



}
