package seb40main026.mainproject.question.entity;

import lombok.*;
import seb40main026.mainproject.member.Member;

import javax.persistence.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
public class QuestionLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionLikeId;

    @Column // 특정 멤버가 좋아요 했는지 안했는지
    private Boolean questionLike = false;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "QUESION_ID")
    private Question question;

    public void modifyQuestionLike(boolean like) {
        this.questionLike = like;
    }
}
