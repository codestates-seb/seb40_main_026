package seb40main026.mainproject.question.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import seb40main026.mainproject.File.File;
import seb40main026.mainproject.answer.entity.Answer;
import seb40main026.mainproject.member.entity.Member;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Entity
@EntityListeners(AuditingEntityListener.class)
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private Integer viewCount;

    @Column(nullable = false)
    private Integer likeCount;

    @Column(nullable = false)
    private Integer reportCount;

    @Column(nullable = false)
    private Integer answerCount;

    @Column
    private String fileUrl;

    @Column(name = "created_at", updatable = false)
    @CreatedDate
    private String createdAt;

    @Column(name = "last_modified_at")
    @LastModifiedDate
    private String modifiedAt;

    @PrePersist
    public void onPrePersist(){
        this.createdAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
        this.modifiedAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
        this.likeCount = this.likeCount == null ? 0 : this.likeCount;
        this.viewCount = this.viewCount == null ? 0 : this.viewCount;
        this.reportCount = this.reportCount == null ? 0 : this.reportCount;
        this.answerCount = this.answerCount == null? 0 : this.answerCount;
//        this.answers = this.answers == null? new ArrayList<>() : this.answers;
    }

    @PreUpdate
    public void onPreUpdate(){
        this.modifiedAt = LocalDate.now().format(DateTimeFormatter.ofPattern("yy-MM-dd"));
    }

    @OneToOne(cascade = CascadeType.REMOVE) @Setter
    @JoinColumn(name = "FILE_ID")
    private File file;

    @ManyToOne @Setter
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

//    @OneToMany(mappedBy = "question",cascade = CascadeType.REMOVE)
//    private List<Answer> answers;

    public void modify(String title, String content) { // ??????
        if(title != null) this.title = title;
        if(content != null) this.content = content;
    }

    public void modifyFileUrl(String url) {
        this.fileUrl = url;
    }

    public void increaseViewCount() { // ????????? ??????
        this.viewCount += 1;
    }

    public void upLike() { // ????????? ??? ??????
        this.likeCount += 1;
    }

    public void downLike() { // ????????? ??? ??????
        this.likeCount -= 1;
    }

    public void upReport() { // ?????? ??? ?????????
        this.reportCount += 1;
    }

    public void downReport() { // ?????? ??? ??????
        this.reportCount -= 1;
    }

    public void increaseAnswerCount() {
        this.answerCount += 1;
    }

    public void decreaseAnswerCount() {
        this.answerCount -= 1;
    }
}