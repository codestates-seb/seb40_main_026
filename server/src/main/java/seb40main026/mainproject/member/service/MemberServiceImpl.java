package seb40main026.mainproject.member.service;

import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb40main026.mainproject.auth.utils.CustomAuthorityUtils;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.repository.MemberRepository;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    @Transactional
    @Override
    public Member createMember(Member member) {
        verifiedExistsEmail(member.getEmail());
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);
        member.setMemberStatus(Member.MemberStatus.MEMBER_ACTIVE);
        member.setMemberGrade(Member.MemberGrade.EGG);
        member.setSticker(0);

        List<String> roles = authorityUtils.createRoles(member.getEmail(), member.getTeacher());
        member.setRoles(roles);

        return memberRepository.save(member);
    }

    @Transactional
    @Override
    public Member updatedMember(Member member) {
        Member verifiedMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> verifiedMember.setPassword(passwordEncoder.encode(password)));
        Optional.ofNullable(member.getNickname())
                .ifPresent(verifiedMember::setNickname);
        Optional.ofNullable(member.getMemberGrade())
                .ifPresent(verifiedMember::setMemberGrade);
        //프로필 사진 수정

        return memberRepository.save(verifiedMember);
    }

    @Override
    public Member findMember(long memberId) {
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

    @Override
    public Member getLoginMember() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Member> optionalMember = memberRepository.findByEmail(principal.toString());

        return optionalMember.orElseThrow(() -> new BusinessException(ExceptionCode.MEMBER_NOT_FOUND));
    }
}
