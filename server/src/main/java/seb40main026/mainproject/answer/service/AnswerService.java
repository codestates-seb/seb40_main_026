package seb40main026.mainproject.answer.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40main026.mainproject.answer.entity.Answer;
import seb40main026.mainproject.answer.entity.AnswerLike;
import seb40main026.mainproject.answer.entity.AnswerReport;
import seb40main026.mainproject.answer.repository.AnswerLikeRepository;
import seb40main026.mainproject.answer.repository.AnswerReportRepository;
import seb40main026.mainproject.answer.repository.AnswerRepository;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.member.Member;
import seb40main026.mainproject.member.MemberService;
import seb40main026.mainproject.question.entity.Question;
import seb40main026.mainproject.question.service.QuestionService;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final AnswerLikeRepository answerLikeRepository;
    private final AnswerReportRepository answerReportRepository;
    private final MemberService memberService;
    private final QuestionService questionService;

    // 답변 작성
    public Answer createAnswer(Answer answer, long questionId) {
        Question question = questionService.findVerifiedQuestion(questionId);
        Member member = memberService.getLoginMember();
        answer.setQuestion(question);
        answer.setMember(member);
        return answerRepository.save(answer);
    }

    // 답변 수정
    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getContent())
                .ifPresent(findAnswer::setContent);

        return answerRepository.save(findAnswer);
    }

    // 답변 조회
    public List<Answer> findAnswers(long answerId) {
        Question question = questionService.findVerifiedQuestion(answerId);
        return answerRepository.findAllByQuestion(question);
    }

    // 답변 삭제
    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    // 답변 채택
    public Answer best(long answerId) {
        Answer answer = findVerifiedAnswer(answerId);
        answer.setBest(true);
        return answerRepository.save(answer);
    }

    // 유효한 답변인지 확인
    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer = optionalAnswer.orElseThrow(
                () -> new BusinessException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

    // 특정 답변 신고
    public AnswerReport report(long answerId) {
        Member member = memberService.getLoginMember();
        Answer answer = findVerifiedAnswer(answerId);

        AnswerReport findAnswerReport = answerReportRepository.findByAnswerAndMember(answer, member);

        AnswerReport answerReport = new AnswerReport();
        if(findAnswerReport == null) {
            answerReport.setAnswer(answer);
            answerReport.setMember(member);
        } else {
            answerReport = findAnswerReport;
        }
        answerReport.setAnswerReport(1);
        answerReportRepository.save(answerReport);
        answer.setReportCount(getReports(answerId));
        answerRepository.save(answer);
        return answerReport;
    }

    // 신고 취소
    public AnswerReport deleteReport(long answerId) {
        Member member = memberService.getLoginMember();
        Answer answer = findVerifiedAnswer(answerId);

        AnswerReport answerReport = answerReportRepository.findByAnswerAndMember(answer, member);

        answerReport.setAnswerReport(0);
        answerReportRepository.save(answerReport);
        answer.setReportCount(getReports(answerId));
        answerRepository.save(answer);
        return answerReport;
    }

    // 전체 신고 수 조회
    public int getReports(long answerId) {
        return answerReportRepository.findAnswerReports(answerId);
    }

    // 특정 답변 좋아요
    public AnswerLike like(long answerId) {
        Member member = memberService.getLoginMember();
        Answer answer = findVerifiedAnswer(answerId);

        AnswerLike findAnswerLike = answerLikeRepository.findByAnswerAndMember(answer, member);

        AnswerLike answerLike = new AnswerLike();
        if(findAnswerLike == null) {
            answerLike.setAnswer(answer);
            answerLike.setMember(member);
        } else {
            answerLike = findAnswerLike;
        }
        answerLike.setAnswerLike(1);
        answerLikeRepository.save(answerLike);
        answer.setLikeCount(getLikes(answerId));
        answerRepository.save(answer);
        return answerLike;
    }

    // 좋아요 취소
    public AnswerLike deleteLike(long answerId) {
        Member member = memberService.getLoginMember();
        Answer answer = findVerifiedAnswer(answerId);

        AnswerLike answerLike = answerLikeRepository.findByAnswerAndMember(answer, member);
        answerLike.setAnswerLike(0);
        answerLikeRepository.save(answerLike);
        answer.setLikeCount(getLikes(answerId));
        answerRepository.save(answer);
        return answerLike;
    }

    // 전체 좋아요 수 조회
    public int getLikes(long answerId) {
        return answerLikeRepository.findAnswerLikes(answerId);
    }
}
