package seb40main026.mainproject.member.service;

import lombok.AllArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import seb40main026.mainproject.File.File;
import seb40main026.mainproject.File.FileService;
import seb40main026.mainproject.answer.repository.AnswerRepository;
import seb40main026.mainproject.auth.utils.CustomAuthorityUtils;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.repository.MemberRepository;
import seb40main026.mainproject.question.repository.QuestionRepository;
import seb40main026.mainproject.s3.S3Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final FileService fileService;
    private final S3Service s3Service;

    @Transactional
    @Override
    public Member createMember(Member member) {
        verifiedExistsEmail(member.getEmail());
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);
        member.setMemberStatus(Member.MemberStatus.MEMBER_ACTIVE);
        member.setMemberGrade(Member.MemberGrade.EGG);
        member.setSticker(0);
        member.setIntroduce("안녕하세요? 반갑습니다.");

        List<String> roles = authorityUtils.createRoles(member.getEmail(), member.getTeacher());
        member.setRoles(roles);

        return memberRepository.save(member);
    }

    @Transactional
    @Override
    public Member updatedMember(Member member, MultipartFile image) throws IOException {
        Member verifiedMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> verifiedMember.setPassword(passwordEncoder.encode(password)));
        Optional.ofNullable(member.getNickname())
                .ifPresent(verifiedMember::setNickname);
        Optional.ofNullable(member.getMemberGrade())
                .ifPresent(verifiedMember::setMemberGrade);
        Optional.ofNullable(member.getIntroduce())
                .ifPresent(verifiedMember::setIntroduce);
        //프로필 사진 수정
        if(image != null) {
            File findFile = verifiedMember.getFile();
            if(findFile != null) { // 이미지 디비에서 원래 이미지 삭제
                fileService.delete(findFile); // repository 삭제
                s3Service.fileDelete(image.getOriginalFilename()); // s3 파일 삭제
            }
            saveMemberFile(image, verifiedMember);
        }

        return memberRepository.save(verifiedMember);
    }

    public void saveMemberFile(MultipartFile image, Member member) throws IOException {
        String url = s3Service.uploadFile(image); // 이미지 s3에 업로드
        File file = new File(image.getOriginalFilename(), url);
        fileService.save(file); // file repository 저장
        member.modifyFileUrl(url);
        member.setFile(file);
    }

    @Override
    public Member findMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);
        findMember.setQuestionCount(questionRepository.countByMember(findMember));
        findMember.setAnswerCount(answerRepository.countByMember(findMember));

        return findVerifiedMember(memberId);
    }

    @Override
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    @Override
    public Member deleteMember(long memberId) {
        Member verifiedMember = findVerifiedMember(memberId);
        verifiedMember.setMemberStatus(Member.MemberStatus.MEMBER_QUIT);
        File findFile = verifiedMember.getFile();
        if(findFile != null) {
            s3Service.fileDelete(findFile.getTitle());
        }
        return memberRepository.save(verifiedMember);
    }

    @Override
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        return optionalMember.orElseThrow(() -> new BusinessException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    @Override
    public void verifiedExistsEmail(String email) {
        Optional<Member> optionalMember = memberRepository.findByEmail(email);
        if(optionalMember.isPresent()){
            if(optionalMember.get().getMemberStatus().equals(Member.MemberStatus.MEMBER_QUIT)) {
                throw new BusinessException(ExceptionCode.MEMBER_QUIT);
            } else {
                throw new BusinessException(ExceptionCode.MEMBER_EXISTS);
            }
        }
    }

    // == Sticker Method == //
    @Override
    public void addStickerAndLevelUp(Member member){
        member.setSticker(member.getSticker()+10);
        if(50<=member.getSticker() && member.getSticker()<=99){
            member.setMemberGrade(Member.MemberGrade.BROKEN_EGG);
        }
        else if(100<=member.getSticker() && member.getSticker()<=199){
            member.setMemberGrade(Member.MemberGrade.CHICK);
        }
        else if(200<=member.getSticker()){
            member.setMemberGrade(Member.MemberGrade.CHICKEN);
        }
    }

    // == Badge Method == //
    @Override
    public void setCurrentBadge(String badgeName){
        Member authMember = getLoginMember();
        List<String> userHaveBadge = authMember.getHaveBadgeList();

        if(userHaveBadge.contains(badgeName)){
            authMember.setCurrentBadge(badgeName);
        }
        else{
            new BusinessException(ExceptionCode.BADGE_NOT_FOUND);
        }
    }

    @Override
    public void addBadge(String badgeName){
        Member authMember = getLoginMember();
        List<String> userHaveBadge = authMember.getHaveBadgeList();

        switch(badgeName){
            case "question" :
            case "answer" :
            case "reply" :
                if (!userHaveBadge.contains(badgeName)) {
                    userHaveBadge.add(badgeName);
                    authMember.setHaveBadgeList(userHaveBadge);
                }
                break;
        }
    }

    @Override
    public Member getLoginMember() {
//        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        Optional<Member> optionalMember = memberRepository.findByEmail(principal.toString());

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Member> optionalMember = memberRepository.findByEmail(principal.toString());
        if(optionalMember.isPresent()) return optionalMember.get();
        else return null;

//        return optionalMember.orElseThrow(() -> new BusinessException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    public Optional<Member> isLoginMember(){
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Member> optionalMember = memberRepository.findByEmail(principal.toString());
        return optionalMember;
    }
    @Override
    public List<Member> findMembersByAnswer(){
        return memberRepository.findAll(Sort.by(Sort.Direction.DESC,"answerCount"));
    }

    @Override
    public List<Member> findMembersByQuestion(){
        return memberRepository.findAll(Sort.by(Sort.Direction.DESC,"questionCount"));
    }
    @Override
    public List<Member> findMembersByLevel(){
        return memberRepository.findAll(Sort.by(Sort.Direction.DESC,"sticker"));
    }

}
