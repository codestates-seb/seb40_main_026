package seb40main026.mainproject.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.member.Member;
import seb40main026.mainproject.member.MemberService;
import seb40main026.mainproject.question.entity.Question;
import seb40main026.mainproject.question.entity.QuestionLike;
import seb40main026.mainproject.question.entity.QuestionReport;
import seb40main026.mainproject.question.repository.QuestionLikeRepository;
import seb40main026.mainproject.question.repository.QuestionReportRepository;
import seb40main026.mainproject.question.repository.QuestionRepository;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionReportRepository questionReportRepository;
    private final QuestionLikeRepository questionLikeRepository;
    private final MemberService memberService;

    // 질문 작성
    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    // 질문 수정 + 권한 검증
    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(findQuestion::setTitle);

        Optional.ofNullable(question.getContent())
                .ifPresent(findQuestion::setContent);

        return questionRepository.save(findQuestion);
    }

    // 전체 질문 조회
    public List<Question> findQuestions() {
        return questionRepository.findAll();
    }

    // 특정 질문 조회
    public Question findQuestion(long questionId) {
        Question question = findVerifiedQuestion(questionId);
        question.setViewCount(question.getViewCount() + 1);
        return findVerifiedQuestion(questionId);
    }

    // 검색 기능
    public List<Question> search(String keyWord) {
        return questionRepository.findByTitleContaining(keyWord);
    }

    // 질문 삭제 + 권한 검증
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

    // 특정 질문 신고
    public QuestionReport report(long questionId) {
        Member member = memberService.getLoginMember();
        Question question = findVerifiedQuestion(questionId);

        QuestionReport findQuestionReport = questionReportRepository.findByQuestionAndMember(question, member);

        if(findQuestionReport == null) { // 신고 처음 누르는 경우
            QuestionReport questionReport = new QuestionReport();
            questionReport.setQuestion(question);
            questionReport.setMember(member);
            questionReport.setQuestionReport(true);
            question.setReportCount(question.getReportCount() + 1);
            questionRepository.save(question);
            return questionReportRepository.save(questionReport);
        } else {
            if(findQuestionReport.getQuestionReport() == true) { // 신고 취소
                findQuestionReport.setQuestionReport(false);
                question.setReportCount(question.getReportCount() - 1);
            } else { // 신고
                findQuestionReport.setQuestionReport(true);
                question.setReportCount(question.getReportCount() + 1);
            }
            questionRepository.save(question);
            return questionReportRepository.save(findQuestionReport);
        }
    }

    // 특정 질문 좋아요
    public QuestionLike like(long questionId) {
        Member member = memberService.getLoginMember();
        Question question = findVerifiedQuestion(questionId);

        QuestionLike findQuestionLike = questionLikeRepository.findByQuestionAndMember(question, member);

        if(findQuestionLike == null) { // 좋아요를 처음 누르는 경우
            QuestionLike questionLike = new QuestionLike();
            questionLike.setQuestion(question);
            questionLike.setMember(member);
            questionLike.setQuestionLike(true);
            question.setLikeCount(question.getLikeCount() + 1);
            question.setCheckLike(true);
            questionRepository.save(question);
            return questionLikeRepository.save(questionLike);
        } else {
            if(findQuestionLike.getQuestionLike() == true) { // 좋아요 취소
                findQuestionLike.setQuestionLike(false);
                question.setLikeCount(question.getLikeCount() - 1);
                question.setCheckLike(true);
            } else { // 좋아요
                findQuestionLike.setQuestionLike(true);
                question.setLikeCount(question.getLikeCount() + 1);
                question.setCheckLike(true);
            }
            questionRepository.save(question);
            return questionLikeRepository.save(findQuestionLike);
        }
    }
}
