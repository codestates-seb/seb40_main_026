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

        QuestionReport questionReport = new QuestionReport();
        if(findQuestionReport == null) { // 신고 처음 누르는 경우
            questionReport.setQuestion(question);
            questionReport.setMember(member);
        } else { // 신고 취소했다가 다시 누르는 경우 (QuestionReport 존재)
            questionReport = findQuestionReport;
        }
        questionReport.setQuestionReport(1);
        questionReportRepository.save(questionReport);
        question.setReportCount(getReports(questionId)); // 해당 질문 신고 수 갱신
        questionRepository.save(question);
        return questionReport;
    }

    // 신고 취소
    public QuestionReport deleteReport(long questionId) {
        Member member = memberService.getLoginMember();
        Question question = findVerifiedQuestion(questionId);

        QuestionReport questionReport = questionReportRepository.findByQuestionAndMember(question, member);

        questionReport.setQuestionReport(0);
        questionReportRepository.save(questionReport);
        question.setReportCount(getReports(questionId)); // 해당 질문 신고 수 갱신
        questionRepository.save(question);
        return questionReport;
    }

    // 전체 신고 수 조회
    public int getReports(long questionId) {
        return questionReportRepository.findQuestionReports(questionId);
    }

    // 특정 질문 좋아요
    public QuestionLike like(long questionId) {
        Member member = memberService.getLoginMember();
        Question question = findVerifiedQuestion(questionId);

        QuestionLike findQuestionLike = questionLikeRepository.findByQuestionAndMember(question, member);

        QuestionLike questionLike = new QuestionLike();
        if(findQuestionLike == null) { // 좋아요를 처음 누르는 경우
            questionLike.setQuestion(question);
            questionLike.setMember(member);
        } else { // 좋아요를 취소했다가 다시 누르는 경우 (QuestionLike 존재)
            questionLike = findQuestionLike;
        }
        questionLike.setQuestionLike(1);
        questionLikeRepository.save(questionLike);
        question.setLikeCount(getLikes(questionId)); // 해당 질문 좋아요 수 갱신
        questionRepository.save(question);
        return questionLike;
    }

    // 좋아요 취소
    public QuestionLike deleteLike(long questionId) {
        Member member = memberService.getLoginMember();
        Question question = findVerifiedQuestion(questionId);

        QuestionLike questionLike = questionLikeRepository.findByQuestionAndMember(question, member);

        questionLike.setQuestionLike(0);
        questionLikeRepository.save(questionLike);
        question.setLikeCount(getLikes(questionId)); // 해당 질문 좋아요 수 갱신
        questionRepository.save(question);
        return questionLike;
    }

    // 전체 좋아요 수 조회
    public int getLikes(long questionId) {
        return questionLikeRepository.findQuestionLikes(questionId);
    }
}
