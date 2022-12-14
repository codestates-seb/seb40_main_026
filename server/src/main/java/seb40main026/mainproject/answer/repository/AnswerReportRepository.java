package seb40main026.mainproject.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import seb40main026.mainproject.answer.entity.Answer;
import seb40main026.mainproject.answer.entity.AnswerReport;
import seb40main026.mainproject.member.entity.Member;

public interface AnswerReportRepository extends JpaRepository<AnswerReport, Long> {
    AnswerReport findByAnswerAndMember(Answer answer, Member member);

    //    신고 수 세기
    @Query("SELECT sum(a.answerReport) FROM AnswerReport a WHERE a.answer.answerId = :answerId")
    int findAnswerReports(@Param("answerId") long answerId);
}
