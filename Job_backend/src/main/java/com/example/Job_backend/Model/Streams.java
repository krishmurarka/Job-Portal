package com.example.Job_backend.Model;

import javax.persistence.*;


@Entity

@Table(name = "Streams")
public class Streams {
    @Id

//    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "stream")
    private char Stream_id;
    private String StreamName;
}
