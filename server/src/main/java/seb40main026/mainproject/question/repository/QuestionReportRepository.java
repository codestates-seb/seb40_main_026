package seb40main026.mainproject.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import seb40main026.mainproject.member.Member;
import seb40main026.mainproject.question.entity.Question;
import seb40main026.mainproject.question.entity.QuestionReport;

public interface QuestionReportRepository extends JpaRepository<QuestionReport, Long> {
    QuestionReport findByQuestionAndMember(Question question, Member member);

    // 신고 수 세기
    @Query("SELECT sum(q.questionReport) FROM QuestionReport q WHERE q.question.questionId = :questionId")
    int findQuestionReports(@Param("questionId") long questionId);
}
