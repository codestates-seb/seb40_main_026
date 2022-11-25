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
import seb40main026.mainproject.badge.service.BadgeService;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.service.MemberServiceImpl;
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
    private final MemberServiceImpl memberService;
    private final QuestionService questionService;
    private final BadgeService badgeService;

    // 답변 작성
    public Answer createAnswer(Answer answer, long questionId) {
        Question question = questionService.findVerifiedQuestion(questionId);
        Member member = memberService.getLoginMember();
        answer.setQuestion(question);
        answer.setMember(member);
//        if(answerRepository.countByMember(member) >= 15) { // 질문 15개 넘으면 질문왕 뱃지 추가
//            badgeService.addBadge(member.getMemberId(), "answer");
//        }
        member.setSticker(member.getSticker() + 10);
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

        if(findAnswerReport == null) { // 신고
            AnswerReport answerReport = new AnswerReport();
            answerReport.setAnswer(answer);
            answerReport.setMember(member);
            answerReport.setAnswerReport(true);
            answer.setReportCount(answer.getReportCount() + 1);
            answerRepository.save(answer);
            return answerReportRepository.save(answerReport);
        } else {
            if(findAnswerReport.getAnswerReport() == true) {
                findAnswerReport.setAnswerReport(false); // 신고 취소
                answer.setReportCount(answer.getReportCount() - 1);
            } else { // 신고
                findAnswerReport.setAnswerReport(true);
                answer.setReportCount(answer.getReportCount() + 1);
            }
            answerRepository.save(answer);
            return answerReportRepository.save(findAnswerReport);
        }
    }

    // 특정 답변 좋아요
    public AnswerLike like(long answerId) {
        Member member = memberService.getLoginMember();
        Answer answer = findVerifiedAnswer(answerId);

        AnswerLike findAnswerLike = answerLikeRepository.findByAnswerAndMember(answer, member);

        if(findAnswerLike == null) { // 좋아요
            AnswerLike answerLike = new AnswerLike();
            answerLike.setAnswer(answer);
            answerLike.setMember(member);
            answerLike.setAnswerLike(true);
            answer.setLikeCount(answer.getLikeCount() + 1);
            answer.setCheckLike(true);
            answerRepository.save(answer);
            return answerLikeRepository.save(answerLike);
        } else {
            if(findAnswerLike.getAnswerLike() == true) { // 좋아요 취소
                findAnswerLike.setAnswerLike(false);
                answer.setLikeCount(answer.getLikeCount() - 1);
                answer.setCheckLike(true);
            } else { // 좋아요
                findAnswerLike.setAnswerLike(true);
                answer.setLikeCount(answer.getLikeCount() + 1);
                answer.setCheckLike(true);
            }
            answerRepository.save(answer);
            return answerLikeRepository.save(findAnswerLike);
        }
    }
}
