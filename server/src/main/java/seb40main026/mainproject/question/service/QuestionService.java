package seb40main026.mainproject.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.member.MemberService;
import seb40main026.mainproject.question.dto.QuestionDto;
import seb40main026.mainproject.question.entity.Question;
import seb40main026.mainproject.question.mapper.QuestionMapper;
import seb40main026.mainproject.question.repository.QuestionRepository;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionMapper mapper;
    private final QuestionRepository questionRepository;

    // 질문 작성
    public QuestionDto.Response createQuestion(QuestionDto.Post questionPostDto) {
        Question question = mapper.questionPostDtoToQuestion(questionPostDto);
        questionRepository.save(question);
        return mapper.questionToQuestionResponse(question);
    }

    // 질문 수정
    public QuestionDto.Response updateQuestion(QuestionDto.Patch questionPatchDto,
                                               long questionId) {
        questionPatchDto.setQuestionId(questionId);
        Question question = mapper.questionPatchDtoToQuestion(questionPatchDto);
        Question findQuestion = findVerifiedQuestion(question.getQuestionId()); // 검증
        findQuestion.modify(question.getTitle(), question.getContent()); // 수정
        return mapper.questionToQuestionResponse(findQuestion);
    }

    // 전체 질문 조회
    public List<QuestionDto.Response> findQuestions(String sort) {
        List<Question> questions = questionRepository.findAll(Sort.by(sort).descending());
        return mapper.questionsToQuestionResponses(questions);
    }

    // 특정 질문 조회
    public QuestionDto.Response findQuestion(long questionId) {
        Question question = findVerifiedQuestion(questionId);
        question.increaseViewCount();
        return mapper.questionToQuestionResponse(question);
    }

    // 검색 기능
    public List<QuestionDto.Response> search(String keyWord) {
        List<Question> questions = questionRepository.findByTitleContainingOrContentContaining(keyWord, keyWord);
        return mapper.questionsToQuestionResponses(questions);
    }

    // 질문 삭제
    public void deleteQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }

    // 유효한 질문인지 확인
    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(
                () -> new BusinessException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
