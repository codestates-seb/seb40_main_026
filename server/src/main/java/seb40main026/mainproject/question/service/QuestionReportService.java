package seb40main026.mainproject.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40main026.mainproject.member.Member;
import seb40main026.mainproject.member.MemberService;
import seb40main026.mainproject.question.dto.QuestionReportResponseDto;
import seb40main026.mainproject.question.entity.Question;
import seb40main026.mainproject.question.entity.QuestionReport;
import seb40main026.mainproject.question.mapper.QuestionMapper;
import seb40main026.mainproject.question.repository.QuestionReportRepository;

@Transactional
@Service
@RequiredArgsConstructor
public class QuestionReportService {
    private final QuestionMapper mapper;
    private final QuestionReportRepository questionReportRepository;
    private final MemberService memberService;
    private final QuestionService questionService;

    // 특정 질문 신고
    public QuestionReportResponseDto report(long questionId) {
        Member member = memberService.getLoginMember();
        Question question = questionService.findVerifiedQuestion(questionId);

        QuestionReport findQuestionReport = questionReportRepository.findByQuestionAndMember(question, member);

        if(findQuestionReport == null) { // 신고 처음 누르는 경우
            QuestionReport questionReport = QuestionReport.builder()
                            .question(question).member(member)
                            .questionReport(true).build();
            question.upReport(); // 신고수 늘리기
            questionReportRepository.save(questionReport);
            return mapper.questionReportToQuestionReportResponse(questionReport);
        } else {
            if(findQuestionReport.getQuestionReport() == true) { // 신고 취소
                findQuestionReport.modifyQuestionReport(false);
                question.downReport();
            } else { // 신고
                findQuestionReport.modifyQuestionReport(true);
                question.upReport();
            }
            return mapper.questionReportToQuestionReportResponse(findQuestionReport);
        }
    }
}
