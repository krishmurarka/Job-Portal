package com.example.Job_backend.Repository;

import com.example.Job_backend.Model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Id;
import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job, Integer> {

    @Query(value = "Select * from quotes_tb t where t.category_id = :id", nativeQuery = true)
    public List<Job> findAllCategories(@Param("id")int JobCategoryId);

    @Query(value = "Select * from quotes_tb t where t.stream_id = :stream ", nativeQuery = true)
    public List<Job> findAllStreams(@Param("stream") char streamId);

    @Query(value = "Select * from quotes_tb t where t.category_id =:id and t.stream_id =:stream ", nativeQuery = true)
    public List<Job> findJobStreams(@Param("id") int jobCategoryId,@Param("stream") char streamId);


    // 1 - sde intern(x)
    // 2 - sde intern(y)

}