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
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.repository.MemberRepository;
import seb40main026.mainproject.member.service.MemberServiceImpl;
import seb40main026.mainproject.s3.S3Service;
import seb40main026.mainproject.study.dto.StudyDto;
import seb40main026.mainproject.study.entity.MemberStudy;
import seb40main026.mainproject.study.entity.Study;
import seb40main026.mainproject.study.mapper.StudyMapper;
import seb40main026.mainproject.study.repository.MemberStudyRepository;
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
    private final MemberServiceImpl memberService;
    private final MemberStudyRepository memberStudyRepository;
    private final S3Service s3Service;
    private final StudyMapper mapper;

    // 스터디 작성
    public StudyDto.Response createStudy(StudyDto.Post studyPostDto, MultipartFile image) throws IOException {
        Study study = mapper.studyPostDtoToStudy(studyPostDto);
        if(image != null) saveStudyFile(image, study);
        return mapper.studyToStudyResponse(studyRepository.save(study), null);
    }

    // 전체 스터디 조회
    public List<StudyDto.Response> findStudies(String sort, int page, int size) {
        if(sort == null) return mapper.studiesToStudyResponses(
                studyRepository.findAll(PageRequest.of(page, size)).getContent()
        );
        List<Study> studies = studyRepository.findAll(PageRequest.of(page, size)).stream().filter(
                study -> study.getOnline().equals(sort)
        ).collect(Collectors.toList());
        return mapper.studiesToStudyResponses(studies);
    }

    // 개별 스터디 조회
    public StudyDto.Response findStudy(long studyId) {
        Study study = findVerifiedStudy(studyId);
        Member member = memberService.getLoginMember(); // 현재 로그인한 멤버
        MemberStudy findMemberStudy = memberStudyRepository.findByMemberAndStudy(member, study);
        return mapper.studyToStudyResponse(study, findMemberStudy);
    }

    // 스터디 수정
    public StudyDto.Response updateStudy(StudyDto.Patch studyPatchDto, MultipartFile image) throws IOException {
        Study study = mapper.studyPatchDtoToStudy(studyPatchDto);
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
        Optional.ofNullable(study.getRecommendation())
                .ifPresent(findStudy::setRecommendation); // 추천대상 수정
        Optional.ofNullable(study.getContact())
                .ifPresent(findStudy::setContact); // 문의 수정
        Optional.ofNullable(study.getPlace())
                .ifPresent(findStudy::setPlace); // 장소 수정
        Optional.ofNullable(study.getCount())
                .ifPresent(findStudy::setCount); // 수강 신청한 인원 수정

        if(image != null) {
            File findFile = findStudy.getFile();
            if(findFile != null) { // 이미지 디비에서 원래 이미지 삭제
                fileService.delete(findFile); // repository 삭제
                s3Service.fileDelete(image.getOriginalFilename()); // s3 파일 삭제
            }
            saveStudyFile(image, findStudy);
        }
        return mapper.studyToStudyResponse(studyRepository.save(findStudy), null);
    }

    public void saveStudyFile(MultipartFile image, Study study) throws IOException {
        String url = s3Service.uploadFile(image); // 이미지 s3에 업로드
        File file = new File(image.getOriginalFilename(), url);
        fileService.save(file); // file repository 저장
        study.modifyFileUrl(url);
        study.setFile(file);
    }

    // 스터디 인원수 증가 (수강신청)
    public StudyDto.Response addRecruitment(long studyId) {
        Study study = findVerifiedStudy(studyId);
        Member member = memberService.getLoginMember(); // 현재 로그인한 멤버

        MemberStudy findMemberStudy = memberStudyRepository.findByMemberAndStudy(member, study);

        if(findMemberStudy == null) { // 수강신청
            MemberStudy memberStudy = MemberStudy.builder()
                    .member(member).study(study).registered(true).build();
            study.increaseCount();
            memberStudyRepository.save(memberStudy);
        } else { // 수강신청 취소
            memberStudyRepository.delete(findMemberStudy);
            study.decreaseCount();
        }
        return mapper.studyToStudyResponse(study, null);
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
