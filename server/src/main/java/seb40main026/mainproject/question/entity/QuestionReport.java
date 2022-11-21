package seb40main026.mainproject.question.entity;

import lombok.*;
import seb40main026.mainproject.member.Member;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Entity
public class QuestionReport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private Boolean questionReport = false;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "QUESION_ID")
    private Question question;

    public void modifyQuestionReport(boolean report) {
        this.questionReport = report;
    }
}
