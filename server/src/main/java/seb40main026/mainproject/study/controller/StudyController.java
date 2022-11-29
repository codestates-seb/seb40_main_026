package seb40main026.mainproject.study.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import seb40main026.mainproject.study.dto.StudyDto;
import seb40main026.mainproject.study.entity.Study;
import seb40main026.mainproject.study.mapper.StudyMapper;
import seb40main026.mainproject.study.service.StudyService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@Validated
@RequestMapping("/studies")
@RequiredArgsConstructor
@CrossOrigin
public class StudyController {
    private final StudyService studyService;
    private final StudyMapper mapper;

    @PostMapping // 스터디 작성
    public ResponseEntity postStudy(@Valid @RequestBody StudyDto.Post studyPostDto) {
        Study study = studyService.createStudy(mapper.studyPostDtoToStudy(studyPostDto));
        StudyDto.Response response = mapper.studyToStudyResponse(study);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping // 전체 스터디 조회
    public ResponseEntity getStudies(@Positive @RequestParam(value="page", defaultValue="1") int page,
                                     @Positive @RequestParam(value="size", defaultValue="10") int size,
                                     @RequestParam(value = "sort", required = false) String sort) {
        List<Study> studies = studyService.findStudies(sort, page - 1, size);
        List<StudyDto.Response> responses = mapper.studiesToStudyResponses(studies);
        return new ResponseEntity(responses, HttpStatus.OK);
    }

    @GetMapping("/{study-id}") // 개별 스터디 조회
    public ResponseEntity getStudy(@PathVariable("study-id") @Positive long studyId) {
        Study study = studyService.findStudy(studyId);
        StudyDto.Response response = mapper.studyToStudyResponse(study);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @PatchMapping("/{study-id}") // 스터디 수정
    public ResponseEntity patchStudy(@PathVariable("study-id") @Positive long studyId,
                                     @Valid @RequestBody StudyDto.Patch studyPatchDto) {
        studyPatchDto.setStudyId(studyId);
        Study study = studyService.updateStudy(mapper.studyPatchDtoToStudy(studyPatchDto));
        StudyDto.Response response = mapper.studyToStudyResponse(study);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @PostMapping("/{study-id}/recruitment") // 스터디 인원 수 증가
    public ResponseEntity recruitmentStudy(@PathVariable("study-id") @Positive long studyId) {
        Study study = studyService.addRecruitment(studyId);
        StudyDto.Response response = mapper.studyToStudyResponse(study);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @DeleteMapping("/{study-id}") // 스터디 삭제
    public ResponseEntity deleteStudy(@PathVariable("study-id") @Positive long studyId) {
        studyService.deleteStudy(studyId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
