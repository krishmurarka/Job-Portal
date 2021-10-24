package com.example.Job_backend.Model;

import jdk.jfr.Category;

import javax.persistence.*;

@Entity(name = "Job")
@Table(name = "quotes_tb")
public class Job {

    //    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String Company_Name;
    private String Job_Title;
    @Id
    private String Url;
    private String Company_Logo;
    private String Job_Location;

//    @OneToOne(targetEntity = JobCategory.class, cascade = CascadeType.ALL)
//    @JoinColumn(name = "category_Id", referencedColumnName = "Category_id")
    private int Category_id;

    //    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "job")
    private char Stream_id;


    public Job() {
    }

    public Job(Long id, String company_Name, String job_Title, String url, String company_Logo, String job_Location, int category_id, char stream_id) {
        this.id = id;
        this.Company_Name = company_Name;
        this.Job_Title = job_Title;
        this.Url = url;
        this.Company_Logo = company_Logo;
        this.Job_Location = job_Location;
        this.Category_id = category_id;
        this.Stream_id = stream_id;
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

    public int getCategory_id() {
        return Category_id;
    }

    public void setCategory_id(int category_id) {
        Category_id = category_id;
    }

    public char getStream_id() {
        return Stream_id;
    }

    public void setStream_id(char stream_id) {
        Stream_id = stream_id;
    }

    @Override
    public String toString() {
        return "Job{" +
                "id=" + id +
                ", Company_Name='" + Company_Name + '\'' +
                ", Job_Title='" + Job_Title + '\'' +
                ", Url='" + Url + '\'' +
                ", Company_Logo='" + Company_Logo + '\'' +
                ", Job_Location='" + Job_Location + '\'' +
                ", Category_id=" + Category_id +
                ", Stream_id=" + Stream_id +
                '}';
    }
}