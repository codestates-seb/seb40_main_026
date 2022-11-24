package seb40main026.mainproject.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.question.entity.Question;
import seb40main026.mainproject.question.entity.QuestionLike;

@EnableJpaRepositories
public interface QuestionLikeRepository extends JpaRepository<QuestionLike, Long> {
    QuestionLike findByQuestionAndMember(Question question, Member member);

//    좋아요 수 세기
    @Query("SELECT sum(q.questionLike) FROM QuestionLike q WHERE q.question.questionId = :questionId")
    int findQuestionLikes(@Param("questionId") long questionId);
}

