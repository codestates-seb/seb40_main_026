package seb40main026.mainproject.question.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb40main026.mainproject.member.Member;
import seb40main026.mainproject.member.MemberRepository;
import seb40main026.mainproject.question.dto.QuestionDto;
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

    // 질문 수정
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionDto.Patch questionPatchDto) {
        QuestionDto.Response response = questionService.updateQuestion(questionPatchDto, questionId);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    // 전체 질문 조회
    @GetMapping
    public ResponseEntity getQuestions(@RequestParam(value = "sort", defaultValue = "questionId", required = false) String sort) {
        List<QuestionDto.Response> responses = questionService.findQuestions(sort);
        return new ResponseEntity(responses, HttpStatus.OK);
    }

    // 특정 질문 조회
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId) {
        QuestionDto.Response response = questionService.findQuestion(questionId);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    // 질문 검색
    @GetMapping("/search")
    public ResponseEntity searchQuestions(@RequestParam("keyWord") String keyWord) {
        List<QuestionDto.Response> responses = questionService.search(keyWord);
        return new ResponseEntity(responses, HttpStatus.OK);
    }

    // 특정 질문 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
