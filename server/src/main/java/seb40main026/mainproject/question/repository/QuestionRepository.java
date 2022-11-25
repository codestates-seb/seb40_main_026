package seb40main026.mainproject.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.question.entity.Question;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByTitleContainingOrContentContaining(String title, String content);
    Long countByMember(Member member);
}
