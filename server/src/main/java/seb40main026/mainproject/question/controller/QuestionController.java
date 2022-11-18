package seb40main026.mainproject.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb40main026.mainproject.member.Member;
import seb40main026.mainproject.member.MemberRepository;
import seb40main026.mainproject.question.dto.QuestionDto;
import seb40main026.mainproject.question.dto.QuestionLikeResponseDto;
import seb40main026.mainproject.question.dto.QuestionReportResponseDto;
import seb40main026.mainproject.question.entity.Question;
import seb40main026.mainproject.question.entity.QuestionLike;
import seb40main026.mainproject.question.entity.QuestionReport;
import seb40main026.mainproject.question.mapper.QuestionMapper;
import seb40main026.mainproject.question.service.QuestionService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@RequestMapping("/questions")
@RequiredArgsConstructor
//@CrossOrigin
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    // 질문 작성
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post questionPostDto) {
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
        QuestionDto.Response response = mapper.questionToQuestionResponse(question);
        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    // 특정 질문 좋아요
    @PostMapping("/{question-id}/like")
    public ResponseEntity likeQuestion(@PathVariable("question-id") @Positive long questionId) {
        QuestionLike questionLike = questionService.like(questionId);
        QuestionLikeResponseDto response = mapper.questionLikeToQuestionLikeResponse(questionLike);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    // 특정 질문 신고
    @PostMapping("/{question-id}/report")
    public ResponseEntity reportQuestion(@PathVariable("question-id") @Positive long questionId) {
        QuestionReport questionReport = questionService.report(questionId);
        QuestionReportResponseDto response = mapper.questionReportToQuestionReportResponse(questionReport);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    // 질문 수정
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionDto.Patch questionPatchDto) {
        questionPatchDto.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));
        QuestionDto.Response response = mapper.questionToQuestionResponse(question);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    // 전체 질문 조회
    @GetMapping
    public ResponseEntity getQuestions(@RequestParam(value = "sort", defaultValue = "questionId", required = false) String sort) {
        List<Question> questions = questionService.findQuestions(sort);
        List<QuestionDto.Response> responses = mapper.questionsToQuestionResponses(questions);
        return new ResponseEntity(responses, HttpStatus.OK);
    }

    // 특정 질문 조회
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);
        QuestionDto.Response response = mapper.questionToQuestionResponse(question);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    // 질문 검색
    @GetMapping("/search")
    public ResponseEntity searchQuestions(@RequestParam("keyWord") String keyWord) {
        List<Question> questions = questionService.search(keyWord);
        List<QuestionDto.Response> responses = mapper.questionsToQuestionResponses(questions);
        return new ResponseEntity(responses, HttpStatus.OK);
    }

    // 특정 질문 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
