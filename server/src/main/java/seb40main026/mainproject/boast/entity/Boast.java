package seb40main026.mainproject.boast.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import seb40main026.mainproject.File.File;
import seb40main026.mainproject.boastReply.entity.BoastReply;
import seb40main026.mainproject.member.entity.Member;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter @Setter
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Boast {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long boastId;

    @Column(nullable = false, length = 30)
    private String title;

    @Column(nullable = false, length = 500)
    private String content;

    @Column(nullable = false)
    private String nickName;

//    @Column
//    private String currentBadge;

    @Column
    private String grade;

    @Column
    private String badge;

    @OneToOne(cascade = CascadeType.REMOVE) @Setter
    @JoinColumn(name = "FILE_ID")
    private File file;

    @Column
    private String fileUrl;

    @Column
    @CreatedDate
    private String boardCreatedAt;

    @Column
    @LastModifiedDate
    private String boardModifiedAt;

    @Column(nullable = false)
    private long viewCount;

    @Column(nullable = false)
    private long likeCount;

    // default checkLike = false
    @Column
    private Boolean checkLike = false;

    @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "boast")
    @JsonManagedReference
    private List<BoastReply> replies = new ArrayList<>();

    //BoastReply type List -> boastReply 객체를 set(add) 해주는 메서드
    public void addReplies(BoastReply boastReply) {
        this.replies.add(boastReply);
        if (boastReply.getBoast() != this) {
            boastReply.setBoast(this);
        }
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    @JsonBackReference
    private Member member;

    public void setMember(Member member) {
        this.member = member;
    }

    public void modifyFileUrl(String url) {
        this.fileUrl = url;
    }

    @PrePersist
    public void onPrePersist(){
        this.boardCreatedAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
        this.boardModifiedAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
    }

    @PreUpdate
    public void onPreUpdate(){
        this.boardModifiedAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
    }
}