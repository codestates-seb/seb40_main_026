package seb40main026.mainproject.question.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;
import seb40main026.mainproject.answer.entity.Answer;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Setter
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
    private Integer viewCount = 0;

    @Column(nullable = false)
    private Integer likeCount = 0;

    @Column(nullable = false)
    private Integer reportCount = 0;

    @Column
    private Boolean checkLike = false;

    @CreatedDate
    @Column(updatable = false)
    @DateTimeFormat(pattern = "yy-MM-dd")
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column
    @DateTimeFormat(pattern = "yy-MM-dd")
    private LocalDateTime modifiedAt;

//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;
//
    @OneToMany(mappedBy = "question",cascade = CascadeType.REMOVE)
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<QuestionLike> questionLikes = new ArrayList<>();
}
