package com.example.Job_backend.Model;

import javax.persistence.*;

@Entity
@Table(name = "JobsCategory")
public class JobCategory {
    @Id
//    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "jobcategory")

    private int Category_id;
    private String CategoryName;

    public JobCategory() {

    }

    public JobCategory(int category_id, String categoryName) {
        Category_id = category_id;
        CategoryName = categoryName;
    }

    public int getCategory_id() {
        return Category_id;
    }

    public void setCategory_id(int category_id) {
        Category_id = category_id;
    }

    public String getCategoryName() {
        return CategoryName;
    }

    public void setCategoryName(String categoryName) {
        CategoryName = categoryName;
    }
}