package com.example.Job_backend.Model;

import javax.persistence.*;

@Entity
@Table(name = "quoutes_tb")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String Company_Name;
    private String Job_Title;
    private String Url;
    private String Company_Logo;
    private String Job_Location;
    //    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "job")
    private Long Category_id;

    //    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "job")
    private Long Stream_id;


    public Job() {
    }

    public Job(Long id, String company_Name, String job_Title, String url, String company_Logo, String job_Location, Long category_id, Long stream_id) {
        this.id = id;
        Company_Name = company_Name;
        Job_Title = job_Title;
        Url = url;
        Company_Logo = company_Logo;
        Job_Location = job_Location;
        Category_id = category_id;
        Stream_id = stream_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompany_Name() {
        return Company_Name;
    }

    public void setCompany_Name(String company_Name) {
        Company_Name = company_Name;
    }

    public String getJob_Title() {
        return Job_Title;
    }

    public void setJob_Title(String job_Title) {
        Job_Title = job_Title;
    }

    public String getUrl() {
        return Url;
    }

    public void setUrl(String url) {
        Url = url;
    }

    public String getCompany_Logo() {
        return Company_Logo;
    }

    public void setCompany_Logo(String company_Logo) {
        Company_Logo = company_Logo;
    }

    public String getJob_Location() {
        return Job_Location;
    }

    public void setJob_Location(String job_Location) {
        Job_Location = job_Location;
    }

    public Long getCategory_id() {
        return Category_id;
    }

    public void setCategory_id(Long category_id) {
        Category_id = category_id;
    }

    public Long getStream_id() {
        return Stream_id;
    }

    public void setStream_id(Long stream_id) {
        Stream_id = stream_id;
    }
}
