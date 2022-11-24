package seb40main026.mainproject.question.entity;

import lombok.Getter;
import lombok.Setter;
import seb40main026.mainproject.member.entity.Member;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class QuestionLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionLikeId;

    @Column
    private int questionLike = 0;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "QUESION_ID")
    private Question question;
}
