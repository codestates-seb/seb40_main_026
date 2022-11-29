package seb40main026.mainproject.member.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import seb40main026.mainproject.boast.entity.Boast;
import seb40main026.mainproject.boastReply.entity.BoastReply;
import seb40main026.mainproject.image.entity.Image;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(length = 12, nullable = false)
    private String nickname;

    //badgeList 와 currentBadge 를 나누어 작업
    @ElementCollection
    private List<String> haveBadgeList = new ArrayList<>();

    @Column
    private String currentBadge;

    @OneToOne(cascade = CascadeType.REMOVE) @Setter
    @JoinColumn(name = "IMAGE_ID")
    private Image image;

    @Column
    private String imageUrl;

    @Column(name = "created_at", updatable = false)
    @CreatedDate
    private String createdAt;

    @Column(name = "last_modified_at")
    @LastModifiedDate
    private String modifiedAt;

    @Column(nullable = false)
    private Integer sticker;

    @Column(nullable = false)
    private String introduce;

    @Column(nullable = false)
    private Boolean teacher;

    @Column()
    private Long questionCount;

    @Column
    private Long answerCount;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private MemberStatus memberStatus;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = false)
    private MemberGrade memberGrade;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    //boast <-> member mapping
    @OneToMany(mappedBy = "member" , cascade = {CascadeType.ALL})
    @JsonManagedReference
    private List<Boast> boasts;

    public void setBoasts(Boast boast){
        this.boasts.add(boast);
        boast.setMember(this);
    }

    //boastReplies <-> member mapping
    @OneToMany(mappedBy = "member" , cascade = {CascadeType.ALL})
    @JsonManagedReference
    private List<BoastReply> replies = new ArrayList<>();

    public void setReplies(BoastReply boastReply){
        this.replies.add(boastReply);
        boastReply.setMember(this);
    }

    public enum MemberStatus {
        MEMBER_ACTIVE("활동중"),
        MEMBER_SLEEP("휴면 상태"),
        MEMBER_QUIT("탈퇴 상태");
        @Getter
        private final String status;

        MemberStatus(String status) {
            this.status = status;
        }
    }

    public enum MemberGrade {
        EGG("계란 등급"),
        BROKEN_EGG("깨진 계란 등급"),
        CHICK("병아리"),
        CHICKEN("닭");

        @Getter
        private final String grade;

        MemberGrade(String grade) {this.grade = grade;}
    }

    public void modifyImageUrl(String url) {
        this.imageUrl = url;
    }

    @PrePersist
    public void onPrePersist(){
        this.createdAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
        this.modifiedAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
    }

    @PreUpdate
    public void onPreUpdate(){
        this.modifiedAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
    }
}

