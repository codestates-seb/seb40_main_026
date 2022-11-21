package seb40main026.mainproject.answer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb40main026.mainproject.answer.dto.AnswerDto;
import seb40main026.mainproject.answer.dto.AnswerLikeResponseDto;
import seb40main026.mainproject.answer.dto.AnswerReportResponseDto;
import seb40main026.mainproject.answer.entity.Answer;
import seb40main026.mainproject.answer.entity.AnswerLike;
import seb40main026.mainproject.answer.entity.AnswerReport;
import seb40main026.mainproject.answer.mapper.AnswerMapper;
import seb40main026.mainproject.answer.service.AnswerService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@RequestMapping("/answers")
@RequiredArgsConstructor
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    // 답변 작성
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post answerPostDto) {
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto), answerPostDto.getQuestionId());
        AnswerDto.Response response = mapper.answerToAnswerResponse(answer);
        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    // 특정 답변 좋아요
    @PostMapping("/{answer-id}/like")
    public ResponseEntity likeAnswer(@PathVariable("answer-id") @Positive long answerId) {
        AnswerLike answerLike = answerService.like(answerId);
        AnswerLikeResponseDto response = mapper.answerLikeToAnswerLikeResponse(answerLike);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    // 특정 답변 신고
    @PostMapping("/{answer-id}/report")
    public ResponseEntity reportAnswer(@PathVariable("answer-id") @Positive long answerId) {
        AnswerReport answerReport = answerService.report(answerId);
        AnswerReportResponseDto response = mapper.answerReportToAnswerReportResponse(answerReport);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    // 답변 수정
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") long answerId,
                                      @Valid @RequestBody AnswerDto.Patch answerPatchDto) {
        answerPatchDto.setAnswerId(answerId);
        Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));
        AnswerDto.Response response = mapper.answerToAnswerResponse(answer);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    // 답변 채택
    @PatchMapping("/{answer-id}/best")
    public ResponseEntity bestAnswer(@PathVariable("answer-id") long answerId) {
        Answer answer = answerService.best(answerId);
        AnswerDto.Response response = mapper.answerToAnswerResponse(answer);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    // 답변 조회
    @GetMapping("/{question-id}")
    public ResponseEntity getAnswers(@PathVariable("question-id") long questionId) {
        List<Answer> answers = answerService.findAnswers(questionId);
        List<AnswerDto.Response> responses = mapper.answersToAnswerResponses(answers);
        return new ResponseEntity(responses, HttpStatus.OK);
    }

    // 답변 삭제
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") long answerId) {
        answerService.deleteAnswer(answerId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
