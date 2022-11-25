
package seb40main026.mainproject.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.service.MemberServiceImpl;
import seb40main026.mainproject.question.dto.QuestionLikeResponseDto;
import seb40main026.mainproject.question.entity.Question;
import seb40main026.mainproject.question.entity.QuestionLike;
import seb40main026.mainproject.question.mapper.QuestionMapper;
import seb40main026.mainproject.question.repository.QuestionLikeRepository;

@Transactional
@Service
@RequiredArgsConstructor
public class QuestionLikeService {
    private final QuestionMapper mapper;
    private final QuestionLikeRepository questionLikeRepository;
    private final MemberServiceImpl memberService;
    private final QuestionService questionService;

    // 특정 질문 좋아요
    public QuestionLikeResponseDto like(long questionId) {
        Member member = memberService.getLoginMember();
        Question question = questionService.findVerifiedQuestion(questionId);

        QuestionLike findQuestionLike = questionLikeRepository.findByQuestionAndMember(question, member);

        if(findQuestionLike == null) { // 좋아요를 처음 누르는 경우
            QuestionLike questionLike = QuestionLike.builder()
                    .question(question).member(member)
                    .questionLike(true).build();
            question.upLike();
//            question.modifyCheckLike(true);
            questionLikeRepository.save(questionLike);
            return mapper.questionLikeToQuestionLikeResponse(questionLike);
        } else {
            if(findQuestionLike.getQuestionLike() == true) { // 좋아요 취소
                findQuestionLike.modifyQuestionLike(false);
                question.downLike();
//                question.modifyCheckLike(false);
            } else { // 좋아요
                findQuestionLike.modifyQuestionLike(true);
                question.upLike();
//                question.modifyCheckLike(true);
            }
            return mapper.questionLikeToQuestionLikeResponse(findQuestionLike);
        }
    }
}