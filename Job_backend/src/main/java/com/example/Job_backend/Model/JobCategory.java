package com.example.Job_backend.Model;

import javax.persistence.*;

@Entity
@Table(name = "JobsCategory")
public class JobCategory {
    @Id
//    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "jobcategory")
    private Long Category_id;
    private String CategoryName;

}