package seb40main026.mainproject.answer.entity;

import lombok.Getter;
import lombok.Setter;
import seb40main026.mainproject.member.entity.Member;

import javax.persistence.*;

@Setter
@Getter
@Entity
public class AnswerReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Boolean answerReport;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;
}
