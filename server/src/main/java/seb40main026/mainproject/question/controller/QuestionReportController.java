package seb40main026.mainproject.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import seb40main026.mainproject.question.dto.QuestionReportResponseDto;
import seb40main026.mainproject.question.service.QuestionReportService;

import javax.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/questions")
@RequiredArgsConstructor
public class QuestionReportController {
    private final QuestionReportService questionReportService;

    @PostMapping("/{question-id}/report") // 특정 질문 신고
    public ResponseEntity reportQuestion(@PathVariable("question-id") @Positive long questionId) {
        QuestionReportResponseDto response = questionReportService.report(questionId);
        return new ResponseEntity(response, HttpStatus.OK);
    }
}
