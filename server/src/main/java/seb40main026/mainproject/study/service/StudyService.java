package seb40main026.mainproject.study.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.study.entity.Study;
import seb40main026.mainproject.study.repository.StudyRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Transactional
@Service
@RequiredArgsConstructor
public class StudyService {
    private final StudyRepository studyRepository;

    // 스터디 작성
    public Study createStudy(Study study) {
        return studyRepository.save(study);
    }

    // 전체 스터디 조회
    public List<Study> findStudies(String sort) {
        return studyRepository.findAll().stream().filter(
                study -> study.getOnline().equals(sort)
        ).collect(Collectors.toList());
    }

    // 개별 스터디 조회
    public Study findStudy(long studyId) {
        return findVerifiedStudy(studyId);
    }

    // 스터디 수정
    public Study updateStudy(Study study) {
        Study findStudy = findVerifiedStudy(study.getStudyId());
        Optional.ofNullable(study.getExplain())
                .ifPresent(findStudy::setExplain); // 설명 수정
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
        return studyRepository.save(findStudy);
    }

    // 스터디 인원수 증가
    public Study addRecruitment(long studyId) {
        Study study = findVerifiedStudy(studyId);
        if(study.getCount() < study.getRecruitment()) {
            study.setCount(study.getCount() + 1);
        } // 정원이 다 차면 인원수가 증가되지 않음
        return studyRepository.save(study);
    }

    // 스터디 삭제
    public void deleteStudy(long studyId) {
        Study findStudy = findVerifiedStudy(studyId);
        studyRepository.delete(findStudy);
    }

    // 유효한 스터디인지 확인
    public Study findVerifiedStudy(long studyId) {
        Optional<Study> optionalStudy = studyRepository.findById(studyId);
        Study findStudy = optionalStudy.orElseThrow(
                () -> new BusinessException(ExceptionCode.STUDY_NOT_FOUND));
        return findStudy;
    }
}