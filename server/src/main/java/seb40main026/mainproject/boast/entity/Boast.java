package seb40main026.mainproject.boast.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import seb40main026.mainproject.boastReply.entity.BoastReply;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter @Setter
@Entity
public class Boast {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long boastId;

    @Column(nullable = false, length = 30)
    private String title;

    @Column(nullable = false, length = 500)
    private String content;

    @Column
    @CreatedDate
    private LocalDateTime boardCreatedAt;

    @Column
    @LastModifiedDate
    private LocalDateTime boardModifiedAt;

    @Column(nullable = false)
    private long view_count = 0;

    @Column(nullable = false)
    private long like_count;

//    @Column(nullable = false)
//    private Long report_count;

    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "boast")
    @JsonManagedReference
    private List<BoastReply> replies = new ArrayList<>();

    //BoastReply type List -> boastReply 객체를 set(add) 해주는 메서드
    public void addReplies(BoastReply boastReply){
        this.replies.add(boastReply);
        if(boastReply.getBoast() != this)
        boastReply.setBoast(this);
    }

}
