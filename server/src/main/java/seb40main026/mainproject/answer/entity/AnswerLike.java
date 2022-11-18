package seb40main026.mainproject.answer.entity;

import lombok.Getter;
import lombok.Setter;
import seb40main026.mainproject.member.Member;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class AnswerLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerLikeId;

    @Column
    private Boolean answerLike;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;
}
