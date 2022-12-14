package seb40main026.mainproject.study.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import seb40main026.mainproject.study.dto.StudyDto;
import seb40main026.mainproject.study.entity.Study;
import seb40main026.mainproject.study.mapper.StudyMapper;
import seb40main026.mainproject.study.service.StudyService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.io.IOException;
import java.util.List;

@RestController
@Validated
@RequestMapping("/studies")
@RequiredArgsConstructor
@CrossOrigin
public class StudyController {
    private final StudyService studyService;

    @PostMapping // 스터디 작성
    public ResponseEntity postStudy(@Valid @RequestPart("studyPostDto") StudyDto.Post studyPostDto,
                                    @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        StudyDto.Response response = studyService.createStudy(studyPostDto, image);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping // 전체 스터디 조회
    public ResponseEntity getStudies(@Positive @RequestParam(value="page", defaultValue="1") int page,
                                     @Positive @RequestParam(value="size", defaultValue="10") int size,
                                     @RequestParam(value = "sort", required = false) String sort) {
        List<StudyDto.Response> responses = studyService.findStudies(sort, page - 1, size);
        return new ResponseEntity(responses, HttpStatus.OK);
    }

    @GetMapping("/{study-id}") // 개별 스터디 조회
    public ResponseEntity getStudy(@PathVariable("study-id") @Positive long studyId) {
        StudyDto.Response response = studyService.findStudy(studyId);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @PatchMapping("/{study-id}") // 스터디 수정
    public ResponseEntity patchStudy(@PathVariable("study-id") @Positive long studyId,
                                     @Valid @RequestPart("studyPatchDto") StudyDto.Patch studyPatchDto,
                                     @RequestPart(value = "image", required = false) MultipartFile image) throws IOException {
        studyPatchDto.setStudyId(studyId);
        StudyDto.Response response = studyService.updateStudy(studyPatchDto, image);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @PostMapping("/{study-id}/recruitment") // 스터디 인원 수 증가
    public ResponseEntity recruitmentStudy(@PathVariable("study-id") @Positive long studyId) {
        StudyDto.Response response = studyService.addRecruitment(studyId);
        return new ResponseEntity(response, HttpStatus.OK);
    }

    @DeleteMapping("/{study-id}") // 스터디 삭제
    public ResponseEntity deleteStudy(@PathVariable("study-id") @Positive long studyId) {
        studyService.deleteStudy(studyId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
