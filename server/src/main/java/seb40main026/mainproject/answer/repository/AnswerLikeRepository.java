package seb40main026.mainproject.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import seb40main026.mainproject.answer.entity.Answer;
import seb40main026.mainproject.answer.entity.AnswerLike;
import seb40main026.mainproject.member.entity.Member;

public interface AnswerLikeRepository extends JpaRepository<AnswerLike, Long> {
    AnswerLike findByAnswerAndMember(Answer answer, Member member);

    //    좋아요 수 세기
    @Query("SELECT sum(a.answerLike) FROM AnswerLike a WHERE a.answer.answerId = :answerId")
    int findAnswerLikes(@Param("answerId") long answerId);
}
