package seb40main026.mainproject.study.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import seb40main026.mainproject.File.File;
import seb40main026.mainproject.File.FileService;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.s3.S3Service;
import seb40main026.mainproject.study.entity.Study;
import seb40main026.mainproject.study.repository.StudyRepository;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@Service
@RequiredArgsConstructor
public class StudyService {
    private final StudyRepository studyRepository;
    private final FileService fileService;
    private final S3Service s3Service;

    // 스터디 작성
    public Study createStudy(Study study, MultipartFile image) throws IOException {
        if(image != null) saveStudyFile(image, study);
        return studyRepository.save(study);
    }

    // 전체 스터디 조회
    public List<Study> findStudies(String sort, int page, int size) {
        if(sort == null) return studyRepository.findAll(PageRequest.of(page, size)).getContent();
        return studyRepository.findAll(PageRequest.of(page, size)).stream().filter(
                study -> study.getOnline().equals(sort)
        ).collect(Collectors.toList());
    }

    // 개별 스터디 조회
    public Study findStudy(long studyId) {
        return findVerifiedStudy(studyId);
    }

    // 스터디 수정
    public Study updateStudy(Study study, MultipartFile image) throws IOException {
        Study findStudy = findVerifiedStudy(study.getStudyId());
        Optional.ofNullable(study.getStudyName())
                .ifPresent(findStudy::setStudyName); // 스터디 이름 수정
        Optional.ofNullable(study.getPeriod())
                .ifPresent(findStudy::setPeriod); // 스터디 기간 수정
        Optional.ofNullable(study.getPrice())
                .ifPresent(findStudy::setPrice); // 스터디 가격 수정
        Optional.ofNullable(study.getTime())
                .ifPresent(findStudy::setTime); // 스터디 시간 수정
        Optional.ofNullable(study.getRecruitment())
                .ifPresent(findStudy::setRecruitment); // 스터디 모집 인원 수정
        Optional.ofNullable(study.getOnline())
                .ifPresent(findStudy::setOnline); // 온오프라인 수정

        if(image != null) {
            File findFile = findStudy.getFile();
            if(findFile != null) { // 이미지 디비에서 원래 이미지 삭제
                fileService.delete(findFile); // repository 삭제
                s3Service.fileDelete(image.getOriginalFilename()); // s3 파일 삭제
            }
            saveStudyFile(image, findStudy);
        }
        return studyRepository.save(findStudy);
    }

    public void saveStudyFile(MultipartFile image, Study study) throws IOException {
        String url = s3Service.uploadFile(image); // 이미지 s3에 업로드
        File file = new File(image.getOriginalFilename(), url);
        fileService.save(file); // file repository 저장
        study.modifyFileUrl(url);
        study.setFile(file);
    }

    // 스터디 인원수 증가
    public Study addRecruitment(long studyId) {
        Study study = findVerifiedStudy(studyId);
        study.increaseCount(); // 정원이 다 차면 인원수가 증가되지 않음
        return study;
    }

    // 스터디 삭제
    public void deleteStudy(long studyId) {
        Study findStudy = findVerifiedStudy(studyId);
        studyRepository.delete(findStudy);
        File findFile = findStudy.getFile();
        if(findFile != null) { // 파일이 존재한다면 s3 파일 삭제
            s3Service.fileDelete(findFile.getTitle());
        }
    }

    // 유효한 스터디인지 확인
    public Study findVerifiedStudy(long studyId) {
        Optional<Study> optionalStudy = studyRepository.findById(studyId);
        Study findStudy = optionalStudy.orElseThrow(
                () -> new BusinessException(ExceptionCode.STUDY_NOT_FOUND));
        return findStudy;
    }
}
