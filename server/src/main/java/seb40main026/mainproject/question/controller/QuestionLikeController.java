package seb40main026.mainproject.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import seb40main026.mainproject.question.dto.QuestionLikeResponseDto;
import seb40main026.mainproject.question.service.QuestionLikeService;

import javax.validation.constraints.Positive;

@RestController
@Validated
@RequestMapping("/questions")
@RequiredArgsConstructor
public class QuestionLikeController {
    private final QuestionLikeService questionLikeService;

    @PostMapping("/{question-id}/like") // 특정 질문 좋아요
    public ResponseEntity likeQuestion(@PathVariable("question-id") @Positive long questionId) {
        QuestionLikeResponseDto response = questionLikeService.like(questionId);
        return new ResponseEntity(response, HttpStatus.OK);
    }
}
