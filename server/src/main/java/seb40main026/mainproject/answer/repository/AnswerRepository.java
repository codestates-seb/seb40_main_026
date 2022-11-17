package seb40main026.mainproject.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb40main026.mainproject.answer.entity.Answer;
import seb40main026.mainproject.question.entity.Question;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findAllByQuestion(Question question);
}
